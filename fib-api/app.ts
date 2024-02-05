import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { fibonacci } from './src/fibonacci';

/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */

export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    const nQueryParam = event.queryStringParameters?.n;
    if (typeof nQueryParam === 'undefined') {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Query parameter "n" is required.',
            }),
        };
    }
    if (nQueryParam === '') {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Query parameter "n" must not be empty.',
            }),
        };
    }
    const n = Number(nQueryParam);
    if (n < 1 || !Number.isInteger(n)) {
        return {
            statusCode: 400,
            body: JSON.stringify({
                message: 'Query parameter "n" must be a positive integer.',
            }),
        };
    }

    try {
        const result = fibonacci(n);
        return {
            statusCode: 200,
            body: JSON.stringify({
                result: result.toString(), // bigintを文字列に変換
            }),
        };
    } catch (err) {
        console.log(err);
        return {
            statusCode: 500,
            body: JSON.stringify({
                message: 'An error occurred during the calculation.',
            }),
        };
    }
};
