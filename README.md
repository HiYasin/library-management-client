# README

# LibWise

An advanced and user-friendly library management client built with React and TypeScript, designed to streamline book management and borrowing workflows. It offers a clean, modern interface for handling essential library operations efficiently using the latest web technologies.

**Live Demo**: [https://library-management-client-faisal.vercel.app/](https://library-management-client-faisal.vercel.app/)

## Features

### Book Management

- **Add New Books**
- **Edit Books**
- **View Specific Book Details**
- **View All Books**
- **Delete Books**

### Borrow Management

- **Borrow Available Book**
- **Borrowing Summary**

### Others

- **Responsive UI**
- **Comprehensive validation**
- **Real-time Updates**

## Tech Stack

- **Build Tool:** [Vite](https://vitejs.dev/)
- **Library:** [React](https://react.dev/)
- **Programming Language:** [TypeScript](https://www.typescriptlang.org/)
- **Routing:** [React Router](https://reactrouter.com/)
- **State Management:** [Redux Toolkit](https://redux-toolkit.js.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [Shadcn UI](https://ui.shadcn.com/)
- **Forms:** [React Hook Form](https://react-hook-form.com/)
- **Schema Validation:** [Zod](https://zod.dev/)

## Getting Started

### Setup Instructions

1. **Clone the repository**
    
    ```bash
    git clone https://github.com/HiYasin/library-management-client
    ```
    
2. **Go to project directory**  
    
    ```bash
    cd library-management-client
    ```
    
3. **Install dependencies**
    
    ```bash
    npm install
    ```
    
4. **Start the development server**
    
    ```bash
    npm run dev
    ```
    

## Scripts

- `npm run dev` - Runs development mode. To view it in the browser open [http://localhost:5173](http://localhost:5173/)
- `npm run build` - Builds the app for production to the `dist` folder.

## Project Structure

```bash
root/
│
├── 📁 src/                         # Main source code
│   ├── 📁 assets/                  # Static files (images, icons, etc.)
│   ├── 📁 components/              # Reusable UI components
│   │   ├── 📁 data-table/          # Table components (likely TanStack)
│   │   ├── 📁 module/              # Domain-specific UI modules
│   │   └── 📁 ui/                  # ShadCN or custom UI elements
│   │
│   ├── 📁 lib/                     # Utility functions or helpers
│   ├── 📁 pages/                   # Page components (routed views)
│   ├── 📁 providers/               # Context providers (Theme, Auth, etc.)
│
│   ├── 📁 redux/                   # Redux Toolkit store & slices
│   │   ├── 📁 features/
│   │   │   ├── 📁 books/           # Book-related redux logic
│   │   │   └── 📁 borrow/          # Borrowing-related redux logic
│   │   └── 📄 store.ts             # Redux store configuration
│
│   ├── 📁 routes/                 # Route definitions
│   │   └── 📄 Routes.tsx          # Application route layout
│
│   ├── 📄 App.tsx                 # Root app component
│   ├── 📄 main.tsx                # ReactDOM.render (entry point)
│   ├── 📄 type.ts                 # Global type definitions
```