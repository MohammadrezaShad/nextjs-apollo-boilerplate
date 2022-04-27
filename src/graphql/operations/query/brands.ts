import {gql} from '@apollo/client';

export const BRANDS_QUERY = gql`
  query brands {
    brands {
      items {
        id
        title
        englishTitle
      }
    }
  }
`;
