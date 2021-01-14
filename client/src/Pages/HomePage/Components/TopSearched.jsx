import SeeMoreLink from "../../../Components/SeeMoreLink";
import TopSearchedSlider from "./TopSearchedSlider";

function TopSearched({ focus }) {
  return (
    <div className={"top-searched-container" + (focus ? " focus" : "")}>
      <span className="top-searched-container-title">
        <p>Most Searched Breeds</p>
        <div />
      </span>
      <div className="title-section">
        <div className="title-section-left">
          <p className="top-searched-container-sub">
            66+ Breeds For you to discover
          </p>
        </div>
        <div className="title-section-right">
          <SeeMoreLink path="top-searched" text="See more" />
        </div>
      </div>
      <div className="top-search-slider-container">
        <TopSearchedSlider />
      </div>
    </div>
  );
}

export default TopSearched;
