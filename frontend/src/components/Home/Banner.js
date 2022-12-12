import React, { useEffect, useState } from "react";
import logo from "../../imgs/logo.png";
import agent from "../../agent";

const Banner = ({onSearchUpdate}) => {
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    const param = (searchParam.length >= 3) ? searchParam : "";
    onSearchUpdate(
      param,
      (page) => agent.Items.byTitle(param, page),
      agent.Items.byTitle(param),
    );
  }, [onSearchUpdate, searchParam]);

  return (
    <div className="banner text-white">
      <div className="container p-4 text-center">
        <img src={logo} alt="banner" />
        <div>
          <span>A place to </span>
          <span id="get-part">get</span>
          &nbsp;
          <input 
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
