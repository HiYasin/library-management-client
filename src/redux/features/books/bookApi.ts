import { baseApi } from "@/redux/api/baseApi";

const booksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: ()=> "/books",
            providesTags: ["Books"],
        }),
    }),
});

export const { useGetAllBooksQuery } = booksApi;
