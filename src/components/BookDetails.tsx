import {
  Dialog,
  DialogClose,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
export default function BookDetails({ book, open }) {

  return (
    <div>
      <Dialog open={open}>
        <DialogTrigger asChild>
          <Button className="rounded-full cursor-pointer">
            View Book Details
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Book Details</DialogTitle>
            <DialogDescription>
              <div className="mt-2">
                <div>
                  <strong>Title:</strong> {book.title}
                </div>
                <div>
                  <strong>Author:</strong> {book.author}
                </div>
                <div>
                  <strong>Genre:</strong> {book.genre}
                </div>
                <div>
                  <strong>Copies:</strong> {book.copies}
                </div>
                <div>
                  <strong>Availability:</strong>{" "}
                  {book.available ? "Available" : "Unavailable"}
                </div>
              </div>
            </DialogDescription>
            <div className="flex justify-center pt-4 text-5xl">📚</div>
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button>Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
