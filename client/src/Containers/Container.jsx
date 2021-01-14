import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";
import { setBreeds, setTopSearchedBreeds } from "../store";

function Container({ children }) {
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    const loadBreeds = async () => {
      try {
        const { data } = await axios.get("/api/breeds");

        if (!data.success) return;

        dispatch(setBreeds(data.data));
      } catch (error) {
        console.log(error);
      }
    };
    const loadTopSearchedBreeds = async () => {
      try {
        const { data } = await axios.get("/api/breeds/top-searched");

        if (!data.success) return;

        dispatch(setTopSearchedBreeds(data.data));
      } catch (error) {
        console.log(error);
      }
    };

    loadBreeds();
    loadTopSearchedBreeds();
  }, []);

  return (
    <>
      <div className="header">
        <h2 className="brand" onClick={() => history.push("/")}>
          CatWiki 🐱‍👤
        </h2>
      </div>
      {children}
      <div className="footer">
        <h2 className="brand">CatWiki 🐱‍👤</h2>
        <p>lnnduy - devchellenge.io 2020</p>
      </div>
    </>
  );
}

export default Container;
