
import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import usuariosRouter from './routes/usuarios.routes.js';
import { logger } from './middlewares/logger.middleware.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(logger);

// Rutas
app.use('/', usuariosRouter);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🖥️ Servidor "Soft Jobs" escuchando en http://localhost:${PORT}`);
});