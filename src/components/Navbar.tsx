

import { Button } from "@/components/ui/button"
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet"
import { Link } from "react-router"
import { MenuIcon } from "lucide-react"
import { ModeToggle } from "./mode-toggle"
import logo from "@/assets/books_icon.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="container mx-auto flex max-w-6xl items-center justify-between px-4 md:px-6">


        <Link  to="#" className="flex items-center gap-2"  >
          <img src={logo} alt="Logo" className="h-20 w-20" />
          <p className="text-4xl">Lib<span className="text-primary">Wise</span></p>
        </Link>


        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link to="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Home</Link>
          <Link to="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">About</Link>
          <Link to="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Services</Link>
          <Link to="#" className="text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">Contact</Link>
        </nav>

        <div className="flex items-center gap-0">
          <div>
            <ModeToggle />
          </div>
          
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full md:hidden">
                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4">
                <Link to="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  Home
                </Link>
                <Link to="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  About
                </Link>
                <Link to="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  Services
                </Link>
                <Link to="#" className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}