
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    try {
        const authHeader = req.header("Authorization");
        if (!authHeader) {
            return res.status(401).json({ message: "Acceso denegado. Se requiere un token." });
        }

        const token = authHeader.split("Bearer ")[1];
        if (!token) {
            return res.status(401).json({ message: "Formato de token inválido." });
        }
        
        const payload = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { email: payload.email }; // Se adjunta el payload (email) al objeto request
        next();
    } catch (error) {
        // Manejo de errores especificos de JWT
        if (error.name === 'JsonWebTokenError') {
            return res.status(401).json({ message: "Token inválido." });
        }
        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ message: "El token ha expirado." });
        }
        res.status(500).json({ message: "Error interno del servidor al verificar el token." });
    }
};