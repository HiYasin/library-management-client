import BookTable from "@/components/module/BookTable";

export default function AllBooks() {
  return (
    <section className="w-full flex items-center px-6 md:px-16">
      <div className="w-full max-w-7xl mx-auto">
        <BookTable />
      </div>
    </section>
  );
}
