# Business Website

A modern, responsive business website built with Next.js 14 and TypeScript.

## Features

- 🚀 Built with Next.js 14 (App Router)
- 💻 TypeScript for type safety
- 🎨 Modern and responsive design
- 📱 Mobile-friendly interface
- ⚡ Fast and optimized performance

## Getting Started

### Prerequisites

- Node.js 18+ installed on your system
- npm, yarn, or pnpm package manager

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
├── app/
│   ├── layout.tsx      # Root layout component
│   ├── page.tsx        # Home page component
│   ├── page.module.css # Home page styles
│   └── globals.css     # Global styles
├── package.json        # Dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── next.config.js     # Next.js configuration
```

## Customization

You can customize the website by:

1. **Adding your logo**: 
   - Place your logo image in the `public/` folder (e.g., `public/logo.png` or `public/logo.svg`)
   - Open `components/Navigation.tsx`
   - Update `logoPath` to match your logo filename (e.g., `'/logo.png'`)
   - Set `showLogo` to `true`
   - Optionally set `showTextWithLogo` to `true` to show text alongside the logo

2. **Updating the business name**: Edit the logo text in `components/Navigation.tsx`

3. **Changing colors**: Modify CSS variables in `app/globals.css`

4. **Updating content**: Edit the text in the respective page files

5. **Adding sections**: Add new sections to any page component

## Build for Production

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js GitHub Repository](https://github.com/vercel/next.js)

