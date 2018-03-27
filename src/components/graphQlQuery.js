import gql from 'graphql-tag';
const FEED_SEARCH_QUERY = gql`
    query FeedSearchQuery($filter: String!) {
        feed(filter: $filter) {
            id
            link
            uniq
            pic
        }
    }
`
export default FEED_SEARCH_QUERY;