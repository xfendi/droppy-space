"use client";

import { Bodies, Body, Composite, Engine } from "matter-js";
import Link from "next/link";
import { useEffect, useRef, type MouseEvent, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface IconBurstProps {
  children: ReactNode;
  label: string;
  className?: string;
  href?: string;
}

export default function IconBurst({
  children,
  label,
  className,
  href,
}: IconBurstProps) {
  const sourceRef = useRef<HTMLSpanElement>(null);
  const activeBursts = useRef(new Set<() => void>());

  useEffect(() => {
    const bursts = activeBursts.current;
    return () => {
      for (const cleanup of bursts) cleanup();
    };
  }, []);

  function burst(event: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) {
    const motionPreference = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    const source = sourceRef.current;
    if (motionPreference.matches || !source) return;

    const { left, top, width, height } =
      event.currentTarget.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    const engine = Engine.create({ enableSleeping: true });
    engine.gravity.y = 1;

    const thickness = 50;
    const floor = Bodies.rectangle(
      window.innerWidth / 2,
      window.innerHeight + thickness / 2,
      window.innerWidth,
      thickness,
      { isStatic: true },
    );
    const leftWall = Bodies.rectangle(
      -thickness / 2,
      window.innerHeight / 2,
      thickness,
      window.innerHeight,
      { isStatic: true },
    );
    const rightWall = Bodies.rectangle(
      window.innerWidth + thickness / 2,
      window.innerHeight / 2,
      thickness,
      window.innerHeight,
      { isStatic: true },
    );

    const group = Body.nextGroup(true);
    const color = getComputedStyle(source).color;
    const particles = Array.from({ length: 16 }, () => {
      const element = source.cloneNode(true) as HTMLSpanElement;
      element.inert = true;
      element.setAttribute("aria-hidden", "true");
      element.setAttribute("data-icon-burst-particle", "");
      Object.assign(element.style, {
        position: "fixed",
        left: "0",
        top: "0",
        width: `${width}px`,
        height: `${height}px`,
        color,
        pointerEvents: "none",
        zIndex: "100",
        willChange: "transform",
        transform: `translate(${center.x - width / 2}px, ${center.y - height / 2}px) rotate(0rad)`,
      });
      document.body.appendChild(element);

      const body = Bodies.rectangle(center.x, center.y, width, height, {
        restitution: 0.5,
        friction: 0.15,
        frictionAir: 0.015,
        // Copies share an origin, so only collide with the viewport boundaries.
        collisionFilter: { group },
      });
      const angle = Math.random() * Math.PI * 2;
      const speed = 5 + Math.random() * 10;
      Body.setVelocity(body, {
        x: Math.cos(angle) * speed,
        y: Math.sin(angle) * speed - 3,
      });
      Body.setAngularVelocity(body, (Math.random() - 0.5) * 0.12);
      return { body, element };
    });

    Composite.add(engine.world, [
      floor,
      leftWall,
      rightWall,
      ...particles.map(({ body }) => body),
    ]);

    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;
    function resize() {
      const nextWidth = window.innerWidth;
      const nextHeight = window.innerHeight;
      Body.scale(floor, nextWidth / viewportWidth, 1);
      Body.setPosition(floor, {
        x: nextWidth / 2,
        y: nextHeight + thickness / 2,
      });
      for (const wall of [leftWall, rightWall]) {
        Body.scale(wall, 1, nextHeight / viewportHeight);
      }
      Body.setPosition(leftWall, { x: -thickness / 2, y: nextHeight / 2 });
      Body.setPosition(rightWall, {
        x: nextWidth + thickness / 2,
        y: nextHeight / 2,
      });
      viewportWidth = nextWidth;
      viewportHeight = nextHeight;
    }

    let frame = 0;
    let lastTime = performance.now();
    let accumulator = 0;
    const step = 1000 / 60;
    function animate(time: number) {
      accumulator += Math.min(time - lastTime, 100);
      lastTime = time;
      while (accumulator >= step) {
        Engine.update(engine, step);
        accumulator -= step;
      }
      for (const { body, element } of particles) {
        element.style.transform = `translate(${body.position.x - width / 2}px, ${body.position.y - height / 2}px) rotate(${body.angle}rad)`;
      }
      frame = requestAnimationFrame(animate);
    }

    function cleanup() {
      cancelAnimationFrame(frame);
      window.clearTimeout(timeout);
      window.removeEventListener("resize", resize);
      motionPreference.removeEventListener("change", cleanup);
      for (const { element } of particles) element.remove();
      Composite.clear(engine.world, false);
      Engine.clear(engine);
      activeBursts.current.delete(cleanup);
    }

    window.addEventListener("resize", resize);
    motionPreference.addEventListener("change", cleanup);
    const timeout = window.setTimeout(cleanup, 4500);
    activeBursts.current.add(cleanup);
    frame = requestAnimationFrame(animate);
  }

  const controlClassName = cn(
    "pressable inline-flex cursor-pointer rounded-2xl [corner-shape:squircle] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-neutral-900",
    className,
  );
  const content = (
    <span ref={sourceRef} className="inline-flex">
      {children}
    </span>
  );

  if (href !== undefined) {
    return (
      <Link
        href={href}
        aria-label={label}
        onClick={burst}
        className={controlClassName}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      aria-label={label}
      onClick={burst}
      className={controlClassName}
    >
      {content}
    </button>
  );
}
