import db from '../models/db.js';

class ServicesController {
    async getAllServices(req, res) {
        try {
            const [rows] = await db.query('SELECT * FROM services');
            res.json(rows);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving services', error });
        }
    }
}

export default new ServicesController();