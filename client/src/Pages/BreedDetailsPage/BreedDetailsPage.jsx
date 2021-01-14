import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Stat from "./Components/Stat";
import catSvg from "../../cat.svg";
import axios from "axios";

function BreedDetailsPage({ match }) {
  const { breeds } = useSelector((state) => state);
  const [breed, setBreed] = useState(null);
  const [page, setPage] = useState(1);
  const [otherPhotoUrls, setOtherPhotoUrls] = useState([]);

  const getOtherPhotos = async () => {
    if (page > 3) return;
    try {
      const { data } = await axios.get(
        `/api/breeds/${match.params.breedId}/photos/${page}`
      );

      if (!data.success) return;

      setPage(page + 1);
      setOtherPhotoUrls([...otherPhotoUrls, ...data.data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const breed = breeds.find((b) => b.id === match.params.breedId);
    setBreed(breed);
  }, [breeds]);

  useEffect(() => {
    getOtherPhotos();
  }, []);

  return (
    !!breed && (
      <div style={{ padding: "0 12px" }}>
        <div className="breed-info-container">
          <div className="breed-info-left-container">
            <div className="cat-photo-container">
              <img src={breed?.image?.url || catSvg} alt={breed.name} />
            </div>
          </div>
          <div className="breed-info-right-container">
            <p style={{ fontSize: "2rem", marginTop: 0, fontWeight: 500 }}>
              {breed.name}
            </p>
            <p style={{ fontWeight: 500 }}>{breed.description}</p>
            <p
              style={{
                margin: "40px 0",
              }}
            >
              <b>Temperament: </b>
              {breed.temperament}
            </p>
            <p
              style={{
                margin: "40px 0",
              }}
            >
              <b>Origin: </b>
              {breed.origin}
            </p>
            <p
              style={{
                margin: "40px 0",
              }}
            >
              <b>Life span: </b>
              {breed.life_span}
            </p>
            <Stat label="Adaptability" value={breed.adaptability} />
            <Stat label="Affection level" value={breed.affection_level} />
            <Stat label="Child Friendly" value={breed.child_friendly} />
            <Stat label="Grooming" value={breed.grooming} />
            <Stat label="Intelligence" value={breed.intelligence} />
            <Stat label="Health issues" value={breed.health_issues} />
            <Stat label="Social needs" value={breed.social_needs} />
            <Stat label="Stranger friendly" value={breed.stranger_friendly} />
          </div>
        </div>
        <div className="other-photos">
          <p style={{ fontSize: "2rem", fontWeight: 600 }}>Other photos</p>
          <div className="other-photos-container">
            {otherPhotoUrls.map((url, i) => (
              <div key={i} className="other-photo">
                <img src={url} />
              </div>
            ))}
          </div>
          <div style={{ display: "flex" }}>
            {page <= 3 && (
              <button className="btn-load-more" onClick={getOtherPhotos}>
                Load more
              </button>
            )}
          </div>
        </div>
      </div>
    )
  );
}

export default BreedDetailsPage;
