import React, { useState } from "react";
import { linksData } from "./Links";
import { Link } from "react-router-dom";
import "./Aside.css";

const Aside = ({isShow}) => {
  const [isActive, setIsActive] = useState(""); 
  const handleToggle = (view) => {
    setIsActive(view);
  };
  return (
    <aside className="aside__div">
      <div className="aside__divs">
        <div className="aside__logo">
          <div className="aside__logos">
            <img src="./img/subtract2.png" alt="img logo" />
            <span>CodeAnt Ai</span>
          </div>
          <div className="menus">
            <img src="./img/menus.png" alt="menus" />
          </div>
        </div>
        <div className={`aside__links ${isShow ? "aside__links__mobile" : "aside__links" }`}>
           <select className="select">
          <option>Ai code review</option>
          <option>Ai code review</option>
          <option>Ai code review</option>
          <option>Ai code review</option>
        </select>
          {linksData.map((data) => (
            <ul className="links__div" key={data.title}>
              <li className="nav__link">
                <div
                  className={`link__content ${
                    isActive === data.title ? "active" : ""
                  }`}
                  onClick={() => handleToggle(data.title)}
                >
                  <img src={data.img} alt="img__link" />
                  <Link className="link__con" to={data.path}>{data.title}</Link>
                </div>
              </li>
            </ul>
          ))}
           <div className="bottom__links">
          <ul className="links__div">
            <li className="navs__link">
              <div className="link__content">
                <img src="./img/d7.png" alt="img__link" />
                <Link className="link__con">Support</Link>
              </div>
            </li>
          </ul>
          <ul className="links__div">
            <li className="navs__link">
              <div className="link__content">
                <img src="./img/sign-out.png" alt="img__link" />
                <Link className="link__con">Sign out</Link>
              </div>
            </li>
          </ul>
        </div>
        </div>
       
      </div>
    </aside>
  );
};
export default Aside;
