const express = require('express');
const app = express();
const PORT = 3001;

app.use(express.static('public'));
app.use(express.json());

app.post('/order', (req, res) => {
  const { item } = req.body;
  console.log(` Order received for: ${item}`);
  res.json({ message: `Order for ${item} received!` });
});

app.listen(PORT, () => {
  console.log(` FastBite running at http://localhost:${PORT}`);
});
