import { useState } from "react";
import SearchBox from "./components/SearchBox";
import SearchResults from "./components/SearchResults";

import data from "../../data/users.json";
import "./style.css";

export default function Search() {
  const [isAtTop, setIsAtTop] = useState(false);
  // const [usersData, setUsersData] = useState(data);
  const [results, setResults] = useState([]);

  const handleCloseClick = () => {
    setIsAtTop(false);
    setResults([]);
  };

  const handleSearchClick = (searchText) => {
    setIsAtTop(true);
    
    if (data?.length) {
      const searchTextMinus = searchText.toLowerCase();
      const filteredData = data.filter((value) => (
          value.name.toLowerCase().includes(searchTextMinus) || 
          value.phone.toLowerCase().includes(searchTextMinus) ||
          value.email.toLowerCase().includes(searchTextMinus) ||
          value.username.toLowerCase().includes(searchTextMinus)
        )
      );

      setResults(filteredData);
    }
  };

  // const handleSearchClick = () => {
  //   setIsAtTop(!isAtTop);
  // };
  // const handleCloseClick = () => {
  //   setIsAtTop(!isAtTop);
  // };

  console.log(results);
  return (
    <div className={`search ${isAtTop ? "search--top" : "search--center"}`}>
      <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} isSearching={isAtTop} />
      <SearchResults results={results} isSearching={isAtTop} />
    </div>
  );
}