import { baseApi } from "@/redux/api/baseApi";

const booksApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllBooks: builder.query({
            query: () => "/books",
            providesTags: ["Books"],
        }),
        getBookById: builder.query({
            query: (id) => ({
                url: `/books/${id}`,
            }),
            providesTags: ["Books"],
        }),
        deleteBook: builder.mutation({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"],
        }),
        updateBook: builder.mutation({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Books"],
        }),
        createBook: builder.mutation({
            query: (data) => ({
                url: "/books",
                method: "POST",
                body: data,
            }),
            invalidatesTags: ["Books"],
        }),
    }),
});

export const { useGetAllBooksQuery, useGetBookByIdQuery, useDeleteBookMutation, useCreateBookMutation, useUpdateBookMutation } = booksApi;
