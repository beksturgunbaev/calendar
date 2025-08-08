const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const doctors = [
  { id: 1, name: 'Рустам Торогелдие', specialty: 'Терапевт Имплантолог' },
  { id: 2, name: 'Айбек Мырзакулов', specialty: 'Хирург' },
];

const appointments = {
  '2025-08-08': [
    {
      id: 1,
      doctorId: 1,
      timeStart: '15:00',
      timeEnd: '16:30',
      patient: 'Ринат Иманкулов',
      phone: '996550002342',
      status: 'Пришел',
      type: 'Лечение',
      comment: 'просто комментарий',
      color: '#4CAF50',
    },
  ],
};

app.get('/doctors', (req, res) => {
  res.json(doctors);
});

app.get('/appointments', (req, res) => {
  const date = req.query.date;
  res.json(appointments[date] || []);
});

const PORT = 4000;

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
