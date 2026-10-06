import Image from "next/image";
import Link from "next/link";
import IconBurst from "./icon-burst";

const Logo = ({
  size = 70,
  clickable = true,
  burst = !clickable,
  href = "/",
  className,
}: {
  size?: number;
  clickable?: boolean;
  burst?: boolean;
  href?: string;
  className?: string;
}) => {
  const image = (
    <Image
      src="/droplet.png"
      alt="Droppy Space Logo"
      width={size}
      height={size}
      className="pressable"
    />
  );

  if (clickable) {
    return (
      <Link href={href} className={className}>
        {image}
      </Link>
    );
  }

  if (burst) {
    return (
      <IconBurst label="Play with the Droppy Space logo" className={className}>
        {image}
      </IconBurst>
    );
  }

  return <div className={className}>{image}</div>;
};

export default Logo;
