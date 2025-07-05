import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

const books = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    category: "Classic Fiction",
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    category: "Self Improvement",
  },
  {
    title: "1984",
    author: "George Orwell",
    category: "Dystopian",
  },
  {
    title: "Clean Code",
    author: "Robert C. Martin",
    category: "Programming",
  },
];

export default function Discover() {
  return (
    <section className="py-10 w-full max-w-7xl mx-auto px-4">
      <h2 className="text-5xl font-bold mb-6 md:mb-10 text-center text-primary">Discover Books</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-base">{book.title}</CardTitle>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
              <p><strong>Author:</strong> {book.author}</p>
              <p><strong>Category:</strong> {book.category}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      <div className="w-full py-5 flex content-center">
        <Button className="mx-auto rounded-full">See All Books</Button>
      </div>
    </section>
  );
}
