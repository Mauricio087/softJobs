
export const logger = (req, res, next) => {
    console.log(`
    Petición Recibida:
    - Método: ${req.method}
    - URL: ${req.url}
    - Body: ${JSON.stringify(req.body)}
    - Params: ${JSON.stringify(req.params)}
    `);
    next();
};