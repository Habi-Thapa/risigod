import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
const rapidAPIKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;
const rapidAPIHost = "article-extractor-and-summarizer.p.rapidapi.com";

export const articleAPI = createApi({
  reducerPath: "articleAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://article-extractor-and-summarizer.p.rapidapi.com/",
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", rapidAPIKey);
      headers.set("X-RapidAPI-Host", rapidAPIHost);
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getSummary: builder.query({
      query: (params) =>
        `/summarize?url=${encodeURIComponent(params.articleURL)}&length=4`,
    }),
  }),
});

export const { useLazyGetSummaryQuery } = articleAPI;
