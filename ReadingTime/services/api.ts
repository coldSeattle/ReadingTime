export function fakeApi<TResponse>(response: TResponse): Promise<TResponse> {
  return new Promise(res => setTimeout(() => res(response), 450));
}

export const googleApi = `https://www.googleapis.com`;
export const auth = `/auth`;
export const books = `/books`;
export const volumns = 'volumns';

export default {
  getSearchedBooks(resource: string, params: any) {
    const {query} = params.data;
    const url = `${resource}/?q=${query}`;
    return fetch(url).then(response => response.json());
  },
};
