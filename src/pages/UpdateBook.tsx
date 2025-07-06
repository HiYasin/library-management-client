
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router";
import { toast } from "react-toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  useGetBookByIdQuery,
  useUpdateBookMutation,
} from "@/redux/features/books/bookApi";
import { Label } from "@/components/ui/label";
import Spinner from "@/components/ui/spinner";
import { useEffect } from "react";

const bookFormSchema = z.object({
  title: z.string().min(1, "Title is required"),
  author: z.string().min(1, "Author is required"),
  isbn: z.string().min(10, "ISBN must be at least 10 characters"),
  copies: z.coerce.number().int().min(0, "Copies must be a positive number"),
  description: z.string().min(10, "Description must be at least 10 characters"),
  genre: z.enum([
    "FICTION",
    "NON_FICTION",
    "SCIENCE",
    "HISTORY",
    "BIOGRAPHY",
    "FANTASY",
  ]),
  available: z.boolean(),
});

export function UpdateBook() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBookByIdQuery(id);

  console.log({
    data,
    isLoading,
    isError,
  });

  const [updateBook] = useUpdateBookMutation();

  const form = useForm<z.infer<typeof bookFormSchema>>({
    resolver: zodResolver(bookFormSchema),
    defaultValues: {
        available: true,
    },
  });

  useEffect(() => {
    if (data?.data) {
      form.reset(data.data);
    }
  }, [data, form]);

  const onSubmit: SubmitHandler<z.infer<typeof bookFormSchema>> = async (
    data
  ) => {
    const payload = {
        ...data,
        available: data.copies > 0? true : false,
      };
  
    try {
      const res = await updateBook({
        id: id,
        data: payload,
      }).unwrap();
      console.log(res);
      if (res.success) {
        toast.success("Book updated successfully!");
        navigate("/books");
      }
    } catch (error) {
      console.error("Error updating book:", error);
      toast.error("Failed to update book. Please try again.");
    }
  };

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
  return (
    <section className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 w-full mt-5">
      <h2 className="text-5xl font-bold mb-6 md:mb-10 text-center text-primary">
        Update Book
      </h2>
      <div className="max-w-5xl mx-auto w-full my-2">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4 w-4" /> Go Back
        </Button>
      </div>
      <div className="max-w-5xl mx-auto p-4 sm:p-6 lg:p-8 w-full border rounded-lg">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. The Great Gatsby"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. F. Scott Fitzgerald"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="isbn"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>ISBN Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="e.g. 978-0743273565"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="copies"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of copies</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="e.g. 5"
                        {...field}
                        value={field.value || ""}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="A brief summary of the book..."
                      {...field}
                      value={field.value || ""}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="genre"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel>Genre</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a genre" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="FICTION">Fiction</SelectItem>
                        <SelectItem value="NON_FICTION">Non-Fiction</SelectItem>
                        <SelectItem value="SCIENCE">Science</SelectItem>
                        <SelectItem value="HISTORY">History</SelectItem>
                        <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                        <SelectItem value="FANTASY">Fantasy</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="available"
                render={({ field }) => (
                  <FormItem className="">
                    <div className="space-y-1 leading-none">
                      <FormLabel>Available to borrow</FormLabel>
                      {/* <FormControl>

                      </FormControl> */}
                      <div className="flex flex-row items-start space-x-1 rounded-md border p-2">
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                        <Label>Book is available for borrowing</Label>
                      </div>
                    </div>
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </div>
    </section>
  );
}
