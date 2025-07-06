import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://library-management-server-faisal.vercel.app/api",
  }),
  endpoints: () => ({}),
  tagTypes: ["Books", "BorrowBooks"],
});
