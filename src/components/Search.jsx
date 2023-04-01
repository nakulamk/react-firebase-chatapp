import React, { useContext, useState } from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchForm">
        <input type="text" placeholder="Find a user" />
      </div>

      <div className="userChat">
        <img src="" alt="" />
        <div className="userChatInfo">
          <span>ding</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
