const Breed = require("../models/Breed");

const increaseSearchCount = async (req, res) => {
  try {
    const breed = await Breed.findOne({ breedId: req.params.id });

    breed.search += 1;

    await breed.save();

    res.json({ success: true });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false });
  }
};

module.exports = increaseSearchCount;
