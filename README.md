# Droppy

A static gallery of app icons and website logos for inspiration, built with Next.js, React, and Tailwind CSS. Hosted on Cloudflare Pages at [droppy.space](https://droppy.space).

## Development

Use Node.js 22 or newer.

```sh
npm ci
npm run dev
```

Open [localhost:3000](http://localhost:3000). No environment variables or backend services are needed.

## Catalog

All app entries live in [`data/apps.ts`](data/apps.ts). Each entry has a unique `slug`, a `name`, a `kind` of `mobile` or `website`, an `icon_url`, and a destination `url`.

The browser filters and searches the bundled catalog by name. Search and filter selections are shareable through `?q=...&filter=mobile` or `?filter=website`. The gallery shows 100 entries at a time, with a button to reveal more.

## Contributing

Request an app through a [GitHub issue](https://github.com/xfendi/droppy-space/issues), or edit the catalog and submit a pull request. Include the icon image or send it to the maintainer to upload. See [CONTRIBUTING.md](CONTRIBUTING.md).

## License

The source code is available under the [MIT License](LICENSE). App icons and website logos belong to their respective owners and are not covered by the code license. Their inclusion does not grant permission to reuse their branding.

Inter and Nunito use the SIL Open Font License. Their notices are included in [`public/licenses/`](public/licenses). Other dependencies retain their own licenses.
