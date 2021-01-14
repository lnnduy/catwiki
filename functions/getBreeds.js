const api = require("./api");
const Breed = require("../models/Breed");

const getBreeds = async (req, res) => {
  try {
    const breeds = (
      await api.get(
        req.query.q === undefined
          ? "breeds"
          : `breeds/search?q=${req.query.q.trim()}`
      )
    ).data.map((breed) => {
      const url = breed.image !== undefined ? breed.image.url : null;
      return { ...breed, imageUrl: url };
    });

    const promises = [];

    for (const breed of breeds) {
      promises.push(
        Breed.findOne({
          name: breed.name,
        })
      );
    }

    const breedSearchs = await Promise.all(promises);

    for (let [index, breed] of breeds.entries()) {
      if (breedSearchs[index] === null) {
        breed.search = 0;
        const breedSearch = new Breed({
          breedId: breed.id,
          name: breed.name,
        });
        breedSearch.save();
      } else {
        breed.search = breedSearchs[index].search;
      }
    }

    res.json({ success: true, data: breeds });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false });
  }
};

module.exports = getBreeds;
