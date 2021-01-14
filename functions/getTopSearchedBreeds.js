const Breed = require("../models/Breed");
const api = require("./api");

const getTopSearchedBreeds = async (req, res) => {
  try {
    const topSearched = await Breed.find()
      .sort({ search: -1 })
      .gt("search", 0)
      .limit(10);
    const promises = [];

    for (const search of topSearched) {
      promises.push(api.get(`breeds/search?q=${search.name}`));
    }

    const datas = (await Promise.all(promises))
      .map((data) => data.data[0] || null)
      .filter((data) => data !== null);

    const loadImageUrl = async (breed) => {
      try {
        const { data } = await api.get(`images/${breed.reference_image_id}`);
        return { ...breed, imageUrl: data.url };
      } catch (error) {
        console.log(error);
        return { ...breed, imageUrl: null };
      }
    };

    const loadImageUrlPromises = [];

    for (const data of datas) {
      loadImageUrlPromises.push(loadImageUrl(data));
    }

    const topSearchBreeds = (
      await Promise.all(loadImageUrlPromises)
    ).map((breed, i) => ({ ...breed, search: topSearched[i].search }));

    res.json({ success: true, data: topSearchBreeds });
  } catch (error) {
    console.log(error);
    res.json({ success: false });
  }
};

module.exports = getTopSearchedBreeds;
