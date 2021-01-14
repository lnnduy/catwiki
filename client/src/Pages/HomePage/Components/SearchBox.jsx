import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { increaseSearchCount } from "../../../store";

function SearchBox({ focus, setFocus }) {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = useState("");
  const { breeds } = useSelector((state) => state);

  const searchItemClicked = async (breedId) => {
    try {
      axios.get(`api/breeds/${breedId}/increase-search-count`);
      history.push(`/${breedId}`);
      dispatch(increaseSearchCount(breedId));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={`search-bar-container ${focus ? "focus" : ""}`}>
      {focus === true && (
        <div className="btn-close-search-popup">
          <button onClick={() => setFocus(false)}>
            <i className="material-icons">close</i>
          </button>
        </div>
      )}
      <div className="search-bar">
        <input
          placeholder="Enter your breed"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setFocus(true)}
          onBlur={() =>
            window.innerWidth > 1080 && setTimeout(() => setFocus(false), 250)
          }
        />
        <span className="material-icons">search</span>
      </div>
      {search.trim().length > 0 && focus && (
        <div className="search-popup-container">
          <div className="search-popup-list">
            {breeds
              .filter((breed) =>
                breed.name.toLowerCase().includes(search.trim().toLowerCase())
              )
              .map((breed) => (
                <div
                  className="search-popup-item"
                  key={breed.id}
                  onClick={() => searchItemClicked(breed.id)}
                >
                  {breed.name.slice(
                    0,
                    breed.name
                      .toLowerCase()
                      .indexOf(search.trim().toLowerCase())
                  )}
                  <b>
                    {breed.name.slice(
                      breed.name
                        .toLowerCase()
                        .indexOf(search.trim().toLowerCase()),
                      breed.name
                        .toLowerCase()
                        .indexOf(search.trim().toLowerCase()) + search.length
                    )}
                  </b>
                  {breed.name.slice(
                    breed.name
                      .toLowerCase()
                      .indexOf(search.trim().toLowerCase()) + search.length
                  )}
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default SearchBox;
