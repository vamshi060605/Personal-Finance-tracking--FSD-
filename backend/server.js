import express from 'express';
import { connectdb } from './config/db.js'; 

const app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});

app.listen(5000, () => {
    connectdb();
    console.log('server started at http://localhost:5000');
});

app.post("/Category", async (req, res) => {
    try {
        const { name, description } = req.body;
        const category = new Category({ name, description });
        const createdCategory = await category.save();
        res.status(201).json(createdCategory);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

