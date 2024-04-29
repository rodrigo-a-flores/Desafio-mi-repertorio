import pool from "../config/db.js";

const getAllCanciones = async (req, res) => {
    const consulta = 'SELECT * FROM canciones';
    try {
        const response = await pool.query(consulta);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const createCancion = async (req, res) => {
    const { titulo, artista, tono } = req.body;
    const consulta = 'INSERT INTO canciones (titulo, artista, tono) VALUES ($1, $2, $3) returning *';
    const values = [titulo, artista, tono];
    try {
        const response = await pool.query(consulta, values);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateCancion = async (req, res) => {
    const { id } = req.params;
    const { titulo, artista, tono } = req.body;
    const consulta = 'UPDATE canciones SET titulo = $1, artista = $2, tono = $3 WHERE id = $4 returning *';
    const values = [titulo, artista, tono, id];
    try {
        const response = await pool.query(consulta, values);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deleteCancion = async (req, res) => {
    const { id } = req.params;
    const consulta = 'DELETE FROM canciones WHERE id = $1 returning *';
    const values = [id];
    try {
        const response = await pool.query(consulta, values);
        return res.status(200).json(response.rows);
    } catch (error) {
        return res.status(500).json(error);
    }
};

export { 
    getAllCanciones,
    createCancion,
    updateCancion,
    deleteCancion
}