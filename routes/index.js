const router = require("express").Router();

router.get("/breeds", require("../functions/getBreeds"));
router.get(
  "/breeds/top-searched",
  require("../functions/getTopSearchedBreeds")
);
router.get("/breeds/:id", require("../functions/getBreed"));
router.get("/breeds/:id/photos/:page", require("../functions/getPublicPhotos"));
router.get(
  "/breeds/:id/increase-search-count",
  require("../functions/increaseSearchCount")
);

module.exports = router;
