const axios = require("axios");

module.exports = async (req, res) => {
  const val = Math.floor(Math.random() * (1600 - 1) + 1);
  const q = await axios.get("https://type.fit/api/quotes");
  res.send(q.data[val]);
};
