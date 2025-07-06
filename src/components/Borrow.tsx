import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { toast } from "react-toastify";
import { useBorrowBookMutation } from "@/redux/features/borrow/borrowApi";
import type { ApiError } from "@/type";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { CalendarIcon } from "lucide-react";
import { Popover, PopoverTrigger } from "./ui/popover";
import { PopoverContent } from "@radix-ui/react-popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

interface BorrowBookModalProps {
  open: boolean;
  onClose: () => void;
  bookId: string | null;
}

export default function Borrow({
  bookId,
  open,
  onClose,
}: BorrowBookModalProps) {
  const form = useForm();

  const [borrowBook, { isLoading }] = useBorrowBookMutation();

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    console.log(data);
    try {
      if (!bookId) {
        toast.error("Book ID is required to borrow a book");
        return;
      }
      const res = await borrowBook({
        book: bookId,
        dueDate: data?.date,
        quantity: data?.quantity,
      }).unwrap();
      if (res.success) {
        toast.success("Book borrowed successfully");
        form.reset();
        onClose();
      }
    } catch (error: unknown) {
      console.error("Error submitting form:", error);
      toast.error((error as ApiError).data.message);
      form.reset();
      onClose();
    }
  };

  const handleClose = () => {
    form.reset();
    onClose();
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Enter Borrow Information</DialogTitle>
        </DialogHeader>
        <div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
              <FormField
                control={form.control}
                name="quantity"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Copies Quantity</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter number of copy"
                        {...field}
                        value={field.value || ""}
                        type="number"
                        required
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="date"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Due Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant={"outline"}
                            className={cn(
                              "pl-3 text-left font-normal",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>Pick a date</span>
                            )}
                            <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          captionLayout="dropdown"
                          className="border rounded-md shadow-2xl my-2"
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-end gap-2 pt-4">
                <Button type="button" variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                <Button disabled={isLoading} type="submit">
                  {isLoading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
