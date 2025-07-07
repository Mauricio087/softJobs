
import pool from '../db/config.js';
import bcrypt from 'bcryptjs';

export const registerUserModel = async ({ email, password, rol, lenguage }) => {
    const hashedPassword = await bcrypt.hash(password, 10); // Encriptar contraseña
    const values = [email, hashedPassword, rol, lenguage];
    const sqlQuery = 'INSERT INTO usuarios (email, password, rol, lenguage) VALUES ($1, $2, $3, $4) RETURNING *;';
    const { rows } = await pool.query(sqlQuery, values);
    return rows[0];
};

export const getUserByEmailModel = async (email) => {
    const values = [email];
    const sqlQuery = 'SELECT * FROM usuarios WHERE email = $1;';
    const { rows } = await pool.query(sqlQuery, values);
    return rows[0];
};