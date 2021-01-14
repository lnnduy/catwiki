const api = require("./api");
const Breed = require("../models/Breed");

const getBreed = async (req, res) => {
  try {
    const { data } = await api.get(`breeds/search?q=${req.params.id.trim()}`);

    const breed = data[0];

    const breedSearch = await Breed.findOne({ name: breed.id });
    breed.search = breedSearch.search;

    res.json({ success: true, data: breed });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false });
  }
};

module.exports = getBreed;
