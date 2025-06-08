import express from "express"
import cors from "cors"
const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.post('/api/data', (req, res) => {
  res.json({ message: 'ข้อมูลที่ได้รับ' });
});

app.listen(3001, () => console.log('Server running on port 3001'));