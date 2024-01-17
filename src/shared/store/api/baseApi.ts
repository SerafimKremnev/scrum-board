import { prepareHeaders } from '@/shared/api/prepareHeaders';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const BASE_URL = process.env.NEXT_PUBLIC_FRONT_PROXY_API_URL;
const VERCEL_URL = process.env.VERCEL_BRANCH_URL
  ? `https://${process.env.VERCEL_BRANCH_URL}/proxy/api`
  : '';

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: VERCEL_URL ? VERCEL_URL + '/proxy/api' : BASE_URL,
    prepareHeaders: (headers) => prepareHeaders(headers),
  }),
  tagTypes: [],
  endpoints: () => ({}),
});
