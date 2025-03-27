# Development Guide

## Package Manager

This project uses **pnpm** exclusively as its package manager. Please do not use npm or yarn.

## Getting Started

1. Make sure you have pnpm installed:

   ```bash
   # Install pnpm globally if you don't have it
   npm install -g pnpm
   
   # Verify installation
   pnpm --version
   ```

2. Install dependencies:

   ```bash
   pnpm install
   ```

3. Run the development server:

   ```bash
   pnpm dev
   ```

4. Build for production:

   ```bash
   pnpm build
   ```

## Common Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run linter

## Adding Dependencies

- Add a regular dependency:

  ```bash
  pnpm add package-name
  ```

- Add a development dependency:

  ```bash
  pnpm add -D package-name
  ```

## Updating Dependencies

- Update all dependencies:

  ```bash
  pnpm update
  ```

- Update a specific package:

  ```bash
  pnpm update package-name
  ```

## Important Notes

- The project maintains a `pnpm-lock.yaml` file for dependency locking
- Do not commit a `package-lock.json` or `yarn.lock` file
- Node.js version 18.0.0 or higher is required as specified in the project configuration
sudo pnpm run build