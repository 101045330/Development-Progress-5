class DisplayController {
    constructor(db) {
        this.db = db;
    }

    getServiceById(req, res) {
        const serviceId = req.params.id;
        const query = 'SELECT * FROM services WHERE id = ?';

        this.db.query(query, [serviceId], (error, results) => {
            if (error) {
                return res.status(500).json({ error: 'Database query failed' });
            }
            if (results.length === 0) {
                return res.status(404).json({ error: 'Service not found' });
            }
            res.json(results[0]);
        });
    }
}

export default DisplayController;