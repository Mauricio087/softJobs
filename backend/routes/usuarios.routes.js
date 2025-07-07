
import { Router } from 'express';
import { registerUserController, loginUserController, getUserProfileController } from '../controllers/usuarios.controller.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = Router();

// Ruta publica para registrar un nuevo usuario
router.post('/usuarios', registerUserController);

// Ruta publica para iniciar sesion
router.post('/login', loginUserController);

// Ruta protegida para obtener el perfil del usuario autenticado
router.get('/usuarios', verifyToken, getUserProfileController);

export default router;