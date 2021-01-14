import SearchBox from "./SearchBox";

function SearchSection({ focus, setFocus }) {
  return (
    <div className="search-box">
      <div className="search-box-left">
        <p className="brand" style={{ fontSize: 50 }}>
          CatWiki 🐱‍👤
        </p>
        <p className="search-box-sub">Get to know more about your cat breed</p>
        <SearchBox focus={focus} setFocus={setFocus} />
      </div>
      <div className="search-box-right">
        <img src="/black-cat.png" alt="cat" />
      </div>
    </div>
  );
}

export default SearchSection;
