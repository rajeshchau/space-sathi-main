# SpaceSathi Monorepo

This project is a monorepo containing both the frontend and backend of the SpaceSathi application.

## Project Structure

- `frontend/`: Vite + React + TypeScript frontend project (generated via Lovable).
- `backend/`: Node.js + Express + Prisma backend API.

## Frontend (Vite + React + TypeScript)

The frontend is built with React, TypeScript, Vite, and Tailwind CSS.

### Setup
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

## Backend (Node.js + Express + Prisma)

The backend is built with Node.js, Express, and Prisma ORM.

### Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Configure environment variables:
   - Copy `.env.example` to `.env`.
   - Update `DATABASE_URL` with your PostgreSQL connection string.
4. Generate Prisma client:
   ```sh
   npm run prisma:generate
   ```
5. Run database migrations:
   ```sh
   npm run prisma:migrate
   ```
6. Start the development server:
   ```sh
   npm run dev
   ```


