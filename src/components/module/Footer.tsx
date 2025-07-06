// components/Footer.tsx
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="w-full max-w-7xl mx-auto mt-10 px-4">
      <Separator />
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-6 text-sm">
        <div className="text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Library Management System. All rights reserved.
        </div>
        <div className="flex space-x-6">
          <a href="/about" className="hover:underline">About</a>
          <a href="/contact" className="hover:underline">Contact</a>
          <a href="/privacy" className="hover:underline">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
