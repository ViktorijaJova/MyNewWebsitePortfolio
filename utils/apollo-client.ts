import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = new HttpLink({
  uri: `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/graphql`,
});

const withToken = setContext(() => {
  
  return { token: process.env.NEXT_PUBLIC_STRAPI_API_KEY };
  // return { token: null}
});

const authMiddleware = new ApolloLink((operation, forward) => {
  const { token } = operation.getContext();
  // console.log(token)
  operation.setContext(() => ({
    headers: {
      Authorization: token ? `Bearer ${String(token)}` : '',
    },
  }));
  return forward(operation);
});

const link = ApolloLink.from([withToken, authMiddleware.concat(httpLink)]);

const client = new ApolloClient({
  cache: new InMemoryCache({ resultCaching: true }),
  link: link,
});

export default client;
