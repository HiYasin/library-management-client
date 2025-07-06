import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { IBook } from "@/type";

interface BookCardProps {
  book: IBook;
}

export default function BookCard({ book }: BookCardProps) {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row justify-between">
        <CardTitle className="text-base">{book.title}</CardTitle>
        <span
          className={`px-2 py-1 rounded text-xs font-semibold ${
            book.available
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {book.available ? "Available" : "Unavailable"}
        </span>
      </CardHeader>
      <CardContent className="text-sm text-muted-foreground">
        <p>
          <strong>Author:</strong> <span className="italic">{book.author}</span>
        </p>
        <p>
          <strong>Genre:</strong> {book.genre}
        </p>
        <p>
          <strong>Copies:</strong> {book.copies}
        </p>
      </CardContent>
    </Card>
  );
}