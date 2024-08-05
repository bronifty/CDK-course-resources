const handler = async (request: any, context: any) => {
  return {
    statusCode: 200,
    body: "Hello, World!",
  };
};

export { handler };
