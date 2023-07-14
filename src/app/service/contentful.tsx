import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const baseUrl = 'https://graphql.contentful.com/content/v1';
const spaceId = 'o63tlfz9jbab';
const environment = 'master';
const token = 'rbAnrJsx1CaBEtXh4vIUehHfDnxTuvbD6pKhWgUBELc';

export default async function getData() {
    const client = new ApolloClient({
        uri: `${baseUrl}/spaces/${spaceId}/environments/${environment}`,
        headers: {
            authorization: `Bearer ${token}`,
        },
        cache: new InMemoryCache(),
      });
      const res = await client.query({
    query: gql`
    query {
      chordCollection(limit:2000, order: [title_ASC]) {
          items {
              title
              key {
                  name
              }
              scale {
                  name
                  short
              }
              type {
                  name
                  short
              }
              positions
          }
      }

      keyCollection(limit:200, order: [name_ASC]) {
    items {
      name
    }
    }
      chordTypeCollection(limit:200, order: [name_ASC]) {
    items {
      name
      short
    }
    }
      scaleCollection(limit:200, order: [name_ASC]) {
    items {
      name
      short
    }
    }
  }`,
  }); 
  return res.data;

}