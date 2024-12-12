exports.jsonResponse = function jsonResponse(statusCode, body) {
    return {
        statusCode,
        body,
    };
};