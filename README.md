# IMAxtel INTL General Trading Co. W.L.L — Corporate Website

This is a premium, high-performance corporate group website for **IMAxtel INTL General Trading Co. W.L.L**, built as a static site using Next.js, TypeScript, Tailwind CSS v4, and Framer Motion.

## Project Structure

- `/app`: App Router pages and configurations.
  - `/app/layout.tsx`: Main layout loading Poppins font and setting up SEO meta tags.
  - `/app/page.tsx`: Homepage with cinematic sections and interactive panels.
  - `/app/about`: Company story, mission, and core values.
  - `/app/brands`: In-house and partner distributed brand lists.
  - `/app/contact`: Inquiry submissions form.
- `/components`: Shared React UI components.
  - `Header.tsx`: Responsive navigation header.
  - `Footer.tsx`: Substantial group footer.
  - `Placeholder.tsx`: Curator mapping context-matching Unsplash assets.
  - `PageLoader.tsx`: Initial screen loader.
- `/data`: Editable TypeScript datasets (company statistics, entities, brand names).
- `/public`: Static assets. Put the company logo `imaxtellogo.png` or `imaxtellogo.svg` directly in this directory.

## Development

First, start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to view the interface.

## Production Build

To compile a clean static production export:

```bash
npm run build
```
