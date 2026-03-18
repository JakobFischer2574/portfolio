# Portfolio

This project is a personal developer portfolio built with React, TypeScript and Tailwind CSS.  
It presents selected projects in a structured and lightweight way, focusing on clear documentation, visual consistency and easy extensibility.

## Concept

Each project is represented by a minimal content structure:

- `meta.ts` for project metadata (title, description, tags, order)
- `content.md` for the project description and documentation
- optional images inside the project folder

The portfolio application automatically discovers all projects and renders them as cards on the overview page.  
Clicking a card opens a detailed project view where the Markdown content is rendered.

## Goals

- Provide a simple and maintainable way to showcase multiple projects
- Separate content from layout and application logic
- Avoid backend dependencies by using static or dummy data
- Allow fast addition of new projects without modifying core application code
- Ensure clean visual presentation in both light and dark mode

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- Tailwind Typography
- react-markdown

## Project Structure

src/ 
 components/ 
   portfolio/ 
 lib/ 
 types/ 
 portfolio-projects/ 
   project-name/ 
     meta.ts 
     content.md

## Adding a New Project

To add a new project:

1. Create a new folder inside `src/portfolio-projects/`
2. Add a `meta.ts` file with project metadata
3. Add a `content.md` file describing the project
4. Optionally add images and reference them in the Markdown

The project will automatically appear in the portfolio overview.

## Deployment

The project is designed to be deployed as a static frontend application, for example on Cloudflare Pages or similar platforms.
No backend service is required for the basic portfolio functionality.    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
