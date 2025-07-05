
import { Button } from "@/components/ui/button";
import { Link } from "react-router";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/">
        <Button className="rounded-full">Go Back Home</Button>
      </Link>
    </div>
  );
}
