import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DialogClose } from "@radix-ui/react-dialog";

export function Welcome() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full cursor-pointer">Get Started Now</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Welcome to LibWise!</DialogTitle>
          <DialogDescription>
            Your journey to smarter library management starts here. Explore,
            discover, and manage your books with ease on LibWise.
          </DialogDescription>
          <div className="flex justify-center pt-4 text-5xl">
            👋
          </div>
        </DialogHeader>
        <DialogFooter>
          <DialogClose asChild>
            <Button>Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
