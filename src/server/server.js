const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.get("/api", (req, res) => {
    res.json({ message: "DUBI DUBI DUBA DUBI DUBI DUBA DUBI DUBI DUBA PERRY" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});