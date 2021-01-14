import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Scrollbar } from "swiper";
import "swiper/swiper.min.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

SwiperCore.use([Autoplay, Scrollbar]);

function TopSearchedSlider() {
  const { topSearchedBreeds } = useSelector((states) => states);

  return (
    <div>
      {topSearchedBreeds.length === 0 && <p>Loading...</p>}
      {topSearchedBreeds.length > 0 && (
        <Swiper
          spaceBetween={50}
          loop
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 2 },
            600: { slidesPerView: 3 },
            1081: { slidesPerView: 4 },
          }}
        >
          {topSearchedBreeds.map((breed) => (
            <SwiperSlide key={breed.id}>
              <Link to={`/${breed.id}`} style={{ textDecoration: "none" }}>
                <div
                  style={{
                    borderRadius: 24,
                    zIndex: 1,
                    overflow: "hidden",
                    height: 200,
                  }}
                >
                  <img
                    src={breed.imageUrl}
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </div>
                <p style={{ color: "#291507" }}>
                  <b>{breed.name}</b>
                </p>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </div>
  );
}

export default TopSearchedSlider;
