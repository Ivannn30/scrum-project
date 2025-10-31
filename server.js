const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname)); // щоб index.html відкривався

app.get("/api/teachers", (req, res) => {
  res.json([
    { name: "Anna", level: "B2", price: 300 },
    { name: "Mark", level: "C1", price: 400 },
  ]);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
