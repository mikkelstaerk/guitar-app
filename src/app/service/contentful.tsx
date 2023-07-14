import { ApolloClient, InMemoryCache, gql } from '@apollo/client';

const baseUrl = 'https://graphql.contentful.com/content/v1';
const spaceId = 'o63tlfz9jbab';
const environment = 'master';
const token = 'rbAnrJsx1CaBEtXh4vIUehHfDnxTuvbD6pKhWgUBELc';

const client = new ApolloClient({
  uri: `${baseUrl}/spaces/${spaceId}/environments/${environment}`,
  headers: {
      authorization: `Bearer ${token}`,
  },
  cache: new InMemoryCache({
    resultCaching:false,
    addTypename:false
    }),
});

async function getProgressions() {
      const res = await client.query({
    query: gql`
    query {
      progressionCollection(order:[date_DESC]) {
          items {
              title
              date
              key {
                  key {
                      name
                  }
                  scale {
                      name
                      short
                  }
              }
              chordsCollection(limit:20) {
                  items {
                      key {
                          name
                      }
                      scale {
                          name
                          short
                      }
                  }
              }
          }
      }
  }`,
  }); 
  return res.data;


}

async function getData() {
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

export default {getData, getProgressions};