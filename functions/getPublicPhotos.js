const api = require("./api");
const axios = require("axios");

const getPublicPhotos = async (req, res) => {
  try {
    const { id: breedId, page } = req.params;
    const { data } = await axios.get(
      `https://api.thecatapi.com/v1/images/search?breed_id=${breedId}&limit=8&page=${
        page || 1
      }`
    );
    res.json({ success: true, data: data.map((img) => img.url) });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};

module.exports = getPublicPhotos;
