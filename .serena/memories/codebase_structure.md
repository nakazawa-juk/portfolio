# Codebase Structure

## Directory Layout

```
portfolio/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── layout.tsx      # Root layout component
│   │   ├── page.tsx        # Home page component
│   │   └── globals.css     # Global styles
│   └── components/         # React components
│       ├── Hero.tsx        # Hero section
│       ├── Header.tsx      # Navigation header
│       ├── Skills.tsx      # Skills showcase
│       ├── Experience.tsx  # Experience section
│       ├── Strengths.tsx   # Strengths section
│       ├── Works.tsx       # Portfolio works
│       └── Contact.tsx     # Contact form
├── public/                 # Static assets
├── .vscode/               # VS Code settings
└── config files           # Various config files
```

## Component Architecture

- **App Router Pattern**: Using Next.js 13+ app directory
- **Component Structure**: Each section is a separate component
- **Main Page Flow**: Header → Hero → Skills → Experience → Strengths → Works → Contact
- **Styling Approach**: Tailwind CSS utility classes

## Key Files

- `src/app/page.tsx`: Main page that imports all sections
- `src/app/layout.tsx`: Root layout with metadata
- `src/components/`: Individual section components
- `next.config.ts`: Next.js configuration for static export
- `tailwind.config.js`: Tailwind CSS configuration (if present)

## Static Generation Setup

- Configured for static export (`output: 'export'`)
- No server-side features used
- Optimized for static hosting platforms
