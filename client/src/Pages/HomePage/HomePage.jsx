import { useState } from "react";
import SearchSection from "./Components/SearchSection";
import TopSearched from "./Components/TopSearched";
import WhyShouldYouHaveACat from "./Components/WhyShouldYouHaveACat";

function HomePage() {
  const [focus, setFocus] = useState(true);

  return (
    <div className="container">
      <SearchSection focus={focus} setFocus={(focus) => setFocus(focus)} />
      <TopSearched focus={focus} />
      <WhyShouldYouHaveACat />
    </div>
  );
}

export default HomePage;
