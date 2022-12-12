import React, { useCallback, useEffect, useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = ({ onSearchUpdate }) => {
  const [searchParam, setSearchParam] = useState("");
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const param = searchParam.length >= 3 ? searchParam : "";
    onSearchUpdate(
      param,
      (page) => agent.Items.byTitle(param, page),
      agent.Items.byTitle(param)
    );
  }, [onSearchUpdate, searchParam]);

  const onGetClick = useCallback(
    (e) => {
      e.preventDefault();
      setShowSearch(true);
    },
    [setShowSearch]
  );

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part" onClick={onGetClick}>
            get
          </span>
          &nbsp;
          <input
            style={{ display: showSearch ? "inline-block" : "none" }}
            type="text"
            onChange={(e) => setSearchParam(e.target.value)}
            value={searchParam}
            placeholder="What is it that you truly desire?"
            id="search-box"
          />
          &nbsp;
          <span> the cool stuff.</span>
        </div>
      </div>
    </div>
  );
};

export default Banner;
