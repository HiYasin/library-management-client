import { Button } from "../ui/button";
import Spinner from "../ui/spinner";
import { useGetAllBooksQuery } from "@/redux/features/books/bookApi";
import type { IBook } from "@/type";
import BookCard from "./BookCard";
import { Link } from "react-router";

export default function Discover() {
  const { data, isLoading, isError } = useGetAllBooksQuery(undefined);
  // const books = data.data;
  // console.log({
  //   data,
  //   isLoading,
  //   isError,
  // });
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
          Failed to load books. Please try again later.
        </span>
      </div>
    );
  }
  return (
    <section className="py-10 w-full max-w-7xl mx-auto px-4">
      <h2 className="text-5xl font-bold mb-6 md:mb-10 text-center text-primary">
        Discover Books
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.data.slice(0, 4).map((book: IBook) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <div className="w-full py-5 flex content-center">
        <Link to={"/books"} className="mx-auto rounded-full">
          <Button>See All Books</Button>
        </Link>
      </div>
    </section>
  );
}
