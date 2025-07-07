
import { registerUserModel, getUserByEmailModel } from '../models/usuarios.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const registerUserController = async (req, res) => {
    try {
        const { email, password, rol, lenguage } = req.body;
        
        const existingUser = await getUserByEmailModel(email);
        if (existingUser) {
            return res.status(400).json({ message: "El correo electrónico ya está registrado." });
        }

        const newUser = await registerUserModel({ email, password, rol, lenguage });
        res.status(201).json({ message: "Usuario creado correctamente", user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const loginUserController = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await getUserByEmailModel(email);

        if (!user) {
            return res.status(401).json({ message: "Credenciales inválidas." });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Credenciales inválidas." });
        }

        const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};

export const getUserProfileController = async (req, res) => {
    try {
        const userEmail = req.user.email; // Email viene desde el middleware verifyToken
        const user = await getUserByEmailModel(userEmail);
        // El frontend espera un arreglo, por eso devolvemos [user]
        res.status(200).json([user]); 
    } catch (error) {
        res.status(500).json({ error: 'Error interno del servidor' });
    }
};