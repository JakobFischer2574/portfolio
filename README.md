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
