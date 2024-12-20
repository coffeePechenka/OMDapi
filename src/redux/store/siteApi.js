import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"; 

export const omdbApi = createApi({
    reducerPath: 'omdbApi',
    baseQuery: fetchBaseQuery({baseUrl: "http://www.omdbapi.com/"}),

    endpoints: (builder) => ({
        getMoviesByTitle: builder.query({
            query: (title) => `?s=${title}&apikey=a712a7a4`
        }),
        getMoviesById: builder.query({
            query: (id) => `?i=${id}&apikey=a712a7a4`
        })
    })
})



export const { useGetMoviesByTitleQuery, useGetMoviesByIdQuery } = omdbApi