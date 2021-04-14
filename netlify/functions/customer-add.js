const GraphQLClient = require("graphql-request").GraphQLClient;
const gql = require("graphql-request").gql;

const endpoint = "https://graphql.fauna.com/graphql";

exports.handler = async (event, context) => {
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `${process.env.FAUNA_SECRET}`,
    },
  });
  const params = JSON.parse(event.body);
  // console.log(params);
  const fname = params.first_name;
  const lname = params.last_name;

  const mutation = gql`
    mutation AddUser($lastName: String!, $firstName: String!) {
      createCustomer(
        data: {
          firstName: $firstName
          lastName: $lastName
          address: { street: "", city: "", state: "", zipCode: "" }
          telephone: ""
          creditCard: { network: "", number: "" }
        }
      ) {
        _id
        firstName
        lastName
      }
    }
  `;

  const variables = {
    firstName: fname,
    lastName: lname,
  };

  const data = await client.request(mutation, variables);

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
