import React from "react";

function Search({handleFilterChange}) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={handleFilterChange}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}

export default Search;
