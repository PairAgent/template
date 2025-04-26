# Pair Agent Template

A starter template for Pair Agent projects, providing a minimal but complete setup for React applications with TypeScript, Vite, React Router, and TailwindCSS.

## Purpose

This template serves as a recommended starting point for projects built with Pair Agent, an AI-assisted web-based IDE. It provides a clean, modern foundation with the most commonly needed tools already configured, allowing you to focus on building your application logic instead of setting up infrastructure.

## Project Structure

```
template/
├── pages/              # Page components
│   └── home.tsx        # Home page component
├── app.css             # Global CSS
├── app.tsx             # Main application entry point
├── index.html          # HTML entry point
├── router.tsx          # React Router configuration
├── tailwind.config.js  # TailwindCSS configuration
```

## Technologies

- **React 19**: Latest version of the React library
- **TypeScript**: Type safety for JavaScript
- **React Router 7**: Declarative routing for React applications
- **TailwindCSS 4**: Utility-first CSS framework
- **Vite 6**: Next generation frontend tooling

## Extending the Template

This template is intentionally minimal while providing a complete foundation. You can easily add:

- State management libraries (Redux, Zustand, etc.)
- Additional UI libraries
- Testing frameworks
- API clients
- Custom hooks and utilities

## Best Practices

- Organize page components in the `pages/` directory
- Create reusable components in a `components/` directory (create as needed)
- Add API services in a `services/` directory (create as needed)
- Use TypeScript types for props, state, and API responses
- Leverage TailwindCSS for styling

## License

MIT
