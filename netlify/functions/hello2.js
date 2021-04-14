exports.handler = async (event, context) => {
  //   console.log(event);
  const name = event.queryStringParameters.name || "Tuntematon";
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `Hello2, ${name}!` }),
  };
};
