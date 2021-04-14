const GraphQLClient = require("graphql-request").GraphQLClient;
const gql = require("graphql-request").gql;

const endpoint = "https://graphql.fauna.com/graphql";

exports.handler = async (event, context) => {
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `${process.env.FAUNA_SECRET}`,
    },
  });

  const query = gql`
    query AllCustomers {
      allCustomers {
        data {
          _id
          firstName
          lastName
        }
      }
    }
  `;

  const data = await client.request(query);

  console.log(data);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
