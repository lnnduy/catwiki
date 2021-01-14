import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function TopSearchedPage() {
  const { topSearchedBreeds } = useSelector((state) => state);

  return (
    <div>
      <p
        style={{
          fontSize: "2.5rem",
          color: "#291507",
          fontWeight: 700,
          margin: 0,
        }}
      >
        Top {topSearchedBreeds.length} most searched breeds
      </p>
      {topSearchedBreeds.map((breed, i) => (
        <div
          key={breed.id}
          style={{ display: "flex", margin: "50px 0", flexWrap: "nowrap" }}
        >
          <div
            style={{
              overflow: "hidden",
              borderRadius: 36,
              width: 200,
              height: 200,
            }}
          >
            <img
              src={breed.imageUrl}
              alt={breed.name}
              style={{ objectFit: "cover", width: 200, height: 200 }}
            />
          </div>
          <div style={{ padding: "10px 70px", width: "calc(100% - 200px" }}>
            <Link
              style={{
                fontSize: "2.3rem",
                color: "#291507",
                fontWeight: 600,
                margin: 0,
                textDecoration: "none",
              }}
            >
              {i + 1}. {breed.name}
            </Link>
            <p>{breed.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TopSearchedPage;
