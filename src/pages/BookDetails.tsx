import Borrow from "@/components/module/Borrow";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Spinner from "@/components/ui/spinner";
import { useGetBookByIdQuery } from "@/redux/features/books/bookApi";
import { useState } from "react";
import { useNavigate, useParams } from "react-router";

export default function BookDetails() {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBookByIdQuery(id);
  const [ openBorrow, setOpenBorrow ] = useState(false);

  const navigate = useNavigate();

  if (isLoading) {
    return (
      <div className="container mx-auto h-[80vh] flex justify-center items-center">
        <Spinner size={50} />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="container mx-auto py-10 flex justify-center items-center">
        <span className="text-red-500 text-lg">
          Failed to load book. Please try again later.
        </span>
      </div>
    );
  }

  const book = data.data;

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <Card className="shadow-md border border-border rounded-2xl">
        <CardHeader className="pb-2 flex justify-between">
          <CardTitle className="text-3xl font-semibold text-primary">
            {book.title}
          </CardTitle>
          <div className="space-x-1">
            <Button variant="outline" className="text-primary" onClick={()=> navigate(-1)}>Back</Button>
            <Button onClick={() => setOpenBorrow(true)}>Borrow</Button>
            <Borrow bookId={book._id} open={openBorrow} onClose={() => setOpenBorrow(false)}/>
          </div>
        </CardHeader>

        <CardContent className="space-y-6 text-[15px] leading-relaxed text-foreground">
          <div>
            <p className="text-muted-foreground mt-1 text-xl">
              By <strong>{book.author}</strong>
            </p>
          </div>
          <div>
            <h3 className="font-medium text-muted-foreground mb-1">
              Description
            </h3>
            <p>{book.description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <span className="font-medium text-muted-foreground">Genre: </span>
              <span>{book.genre}</span>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">ISBN: </span>
              <span>{book.isbn}</span>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">
                Copies:{" "}
              </span>
              <span>{book.copies}</span>
            </div>
            <div>
              <span className="font-medium text-muted-foreground">
                Status:{" "}
              </span>
              <span
                className={book.available ? "text-green-600" : "text-red-600"}
              >
                {book.available ? "Available" : "Unavailable"}
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              Added on: {new Date(book.createdAt).toLocaleDateString()}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
