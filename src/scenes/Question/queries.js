import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

import { routing } from 'services'

export const getNodeQuery = gql`
  query getNode($id: ID!) {
    ZNode(id: $id) {
      id
      question {
        id
        title
        slug
        user {
          id
          name
          picture
        }
        createdAt
      }
      answer {
        id
        content
        sources {
          id
          label
          url
        }
        user {
          id
          name
          picture
        }
        createdAt
      }
      flags {
        id
        type
        user {
          id
          name
        }
        createdAt
      }
    }
  }
`

/* export const getNodeQuery = gql`
  query getNode($slug: String!) {
    allQuestions(filter: { slug_in: [$slug] }) {
      node {
        id
        question {
          id
          title
          slug
          user {
            id
            name
            picture
          }
          createdAt
        }
        answer {
          id
          content
          sources {
            id
            label
            url
          }
          user {
            id
            name
            picture
          }
          createdAt
        }
        flags {
          id
          type
          user {
            id
            name
          }
          createdAt
        }
      }
    }
  }
` */

export const getNode = graphql(getNodeQuery, {
  skip: props => !props.match.params.slug,
  options: props => ({ variables: { id: routing.getUIDFromSlug(props.match) } })
})