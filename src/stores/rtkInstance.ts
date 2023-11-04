import {
    createApi,
    fetchBaseQuery,
} from '@reduxjs/toolkit/query/react'

export const rtkApi = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
        prepareHeaders: (headers) => {
            const token =
                localStorage.getItem(
                    'access_token'
                ) || ''
            if (token) {
                headers.set('Authorization', token)
            }
            return headers
        },
    }),
    // eslint-disable-next-line
    endpoints: (build) => ({}),
})