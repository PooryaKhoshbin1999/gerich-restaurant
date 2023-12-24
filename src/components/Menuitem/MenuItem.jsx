import React from "react";

import "./MenuItem.css";

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuitem">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="text__cormorant" style={{color : "#DCCA87" , fontSize : '18px'}}>{title}</p>
      </div>
        <div className="app__menuitem-dash" />
      <div className="app__menuitem-price">
        <p className="text__cormorant" style={{color : "#fff"}}>{price}</p>
      </div>
    </div>
    <div className="app__menuitem-sub">
    <p className="p__opensans" style={{color :"#AAA",fontSize : "12px"}}>
    {tags}
    </p>
    </div>
  </div>
);

export default MenuItem;
