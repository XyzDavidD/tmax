# TMAX Landing Page

A modern, responsive landing page for TMAX built with Next.js 14, Tailwind CSS, and shadcn/ui components.

## Features

- 🎨 Dark theme with orange accent colors matching the TMAX app
- 📱 Fully responsive design
- ⚡ Built with Next.js 14 and TypeScript
- 🎯 Three pages: Main landing page, Terms of Service, and Privacy Policy
- 💅 Styled with Tailwind CSS and shadcn/ui components

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Project Structure

```
tmax lp/
├── app/
│   ├── page.tsx          # Main landing page
│   ├── terms/
│   │   └── page.tsx      # Terms of Service page
│   ├── privacy/
│   │   └── page.tsx      # Privacy Policy page
│   ├── layout.tsx        # Root layout
│   └── globals.css       # Global styles with dark theme
├── components/
│   └── ui/
│       └── button.tsx    # Reusable button component
├── lib/
│   └── utils.ts          # Utility functions
├── public/
│   └── logo.svg          # TMAX logo
└── tailwind.config.ts    # Tailwind configuration
```

## Color Scheme

The project uses a dark theme with orange accents to match the TMAX app:

- **Background**: Dark gray (#1a1a1a to #0d0d0d gradient)
- **Primary/Accent**: Orange (#FF6B35)
- **Text**: White and gray shades

## Customization

### Replacing the Logo

Replace `public/logo.svg` with your actual TMAX logo. The current logo is a placeholder.

### Updating Content

- **Terms of Service**: Edit `app/terms/page.tsx`
- **Privacy Policy**: Edit `app/privacy/page.tsx` (currently has placeholder content)
- Replace placeholder text like `[DATE]`, `[CONTACT EMAIL]`, `[ADDRESS]`, etc. with actual values

## Technologies Used

- [Next.js 14](https://nextjs.org/)
- [React 18](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide Icons](https://lucide.dev/)

## License

© 2025 TMAX. All rights reserved.


