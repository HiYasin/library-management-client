import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Link, NavLink } from "react-router";
import { MenuIcon } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import logo from "@/assets/books_icon.png";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4">
        <Link to="#" className="flex items-center gap-2">
          <img src={logo} alt="Logo" className="h-20 w-20" />
          <p className="text-4xl">
            Lib<span className="text-primary">Wise</span>
          </p>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:text-base lg:text-lg font-medium md:flex">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/all-books"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            }
          >
            All Books
          </NavLink>
          <NavLink
            to="/add-books"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            }
          >
            Add Books
          </NavLink>
          <NavLink
            to="/borrow-summary"
            className={({ isActive }) =>
              isActive
                ? "text-primary"
                : "text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
            }
          >
            Borrow Summary
          </NavLink>
        </nav>

        <div className="flex items-center gap-0">
          <div>
            <ModeToggle />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <MenuIcon className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary text-sm font-medium"
                      : "text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  }
                >
                  Home
                </NavLink>
                <NavLink
                  to="/all-books"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary text-sm font-medium"
                      : "text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  }
                >
                  All Books
                </NavLink>
                <NavLink
                  to="/add-books"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary text-sm font-medium"
                      : "text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  }
                >
                  Add Books
                </NavLink>
                <NavLink
                  to="/borrow-summary"
                  className={({ isActive }) =>
                    isActive
                      ? "text-primary text-sm font-medium"
                      : "text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                  }
                >
                  Borrow Summary
                </NavLink>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
