exports.handler = async (event, context) => {
    const { default: server } = await import("../../dist/server/server.js");

    const protocol = event.headers["x-forwarded-proto"] || "https";
    const host = event.headers.host;

    const url = new URL(
        event.rawUrl || `${protocol}://${host}${event.path}`,
    );

    const headers = new Headers();

    for (const [key, value] of Object.entries(event.headers || {})) {
        if (value != null) {
            headers.set(key, value);
        }
    }

    let body = event.body;

    if (body && event.isBase64Encoded) {
        body = Buffer.from(body, "base64");
    }

    const request = new Request(url, {
        method: event.httpMethod,
        headers,
        body:
            event.httpMethod === "GET" || event.httpMethod === "HEAD"
                ? undefined
                : body,
    });

    const response = await server.fetch(request, {}, context);

    const responseBody = await response.arrayBuffer();

    const result = Buffer.from(responseBody).toString("base64");

    const responseHeaders = {};

    response.headers.forEach((value, key) => {
        responseHeaders[key] = value;
    });

    return {
        statusCode: response.status,
        headers: responseHeaders,
        body: result,
        isBase64Encoded: true,
    };
};