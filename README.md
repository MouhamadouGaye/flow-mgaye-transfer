# Vite + React + ShadCN + TypeScript Starter

This is a modern frontend boilerplate using **Vite**, **React**, **TypeScript**, **TailwindCSS**, and **ShadCN UI**, pre-configured with useful libraries and tooling for scalable app development.

---

## 🔧 Stack

- **Vite** – Fast build tool and dev server
- **React 18**
- **TypeScript**
- **Tailwind CSS** with `tailwindcss-animate` & `tailwind-merge`
- **ShadCN UI** (components built on top of Tailwind)
- **React Router DOM** – SPA routing
- **React Hook Form** + `zod` – Robust form handling and validation
- **React Query** – Server state management
- **Recharts** – Charting and data visualization
- **Embla Carousel**, **Input OTP**, **Sonner** (toast notifications), **Lucide Icons**, and more

---

## 📁 Folder Structure

.
── public/ # Static assets
── src/
│ ├── components/ # Reusable UI components
│ ├── pages/ # Route-level components
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utility functions and modules
│ ├── styles/ # Tailwind and global styles
│ └── main.tsx # App entry point
├── index.html # Vite entry
├── tailwind.config.ts # Tailwind config
└── tsconfig.json # TypeScript config

yaml


---

## 🚀 Scripts

| Command         | Description                        |
|----------------|------------------------------------|
| `npm run dev`  | Start local dev server             |
| `npm run build`| Build for production               |
| `npm run build:dev` | Build in development mode     |
| `npm run preview` | Preview the production build    |
| `npm run lint` | Run ESLint                         |

---

## 🧱 Dependencies Highlights

- **Forms & Validation**: `react-hook-form`, `@hookform/resolvers`, `zod`
- **Styling**: `clsx`, `tailwind-merge`, `@tailwindcss/typography`, `tailwindcss-animate`
- **State & Data**: `@tanstack/react-query`, `react-router-dom`
- **UI & UX**: `cmdk`, `lucide-react`, `sonner`, `vaul`, `react-day-picker`, `embla-carousel-react`

---

## ✅ Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev
🧪 Linting
This project uses ESLint with eslint-plugin-react-hooks and eslint-plugin-react-refresh.

Run:

npm run lint

📝 Notes
This project is fully typed with TypeScript.

ShadCN UI was initially integrated and may require Radix components for advanced features.

Ensure your backend aligns with the frontend naming conventions to skip unnecessary data mapping.

📄 License
MIT (MGaye)














