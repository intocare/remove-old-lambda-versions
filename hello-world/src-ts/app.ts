import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";

// 
export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const queries = JSON.stringify(event.queryStringParameters);

    // TODO find all movies with the search query as defined in the `q` query string parameter
    // You can use http://www.omdbapi.com/ for this with temporary API key fefbd1b7
    // We are interested in returning the following data
    // - Average score
    // - Number of matching movies

    return {
        statusCode: 200,
        body: `Queries: ${queries}`
    }
}