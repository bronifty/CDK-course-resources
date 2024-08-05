import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

const handler = async (
  request: APIGatewayProxyEvent,
  context: any
): Promise<APIGatewayProxyResult> => {
  const path = request.path || "No path provided";

  return {
    statusCode: 200,
    body: `Hello, ${path}!`,
  };
};

export { handler };
