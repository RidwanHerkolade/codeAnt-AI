import React from "react";
import { dashData } from "./DashboardData";
import "./Dashboard.css";
const DashboardContent = ({ isShow, handleShow }) => {
  return (
    <div className="dashcontent__div">
      <div className="asides__logo">
        <div className="aside__logos">
          <img src="./img/subtract2.png" alt="img logo" />
          <span>CodeAnt Ai</span>
        </div>
        {isShow ? (
          <div className="menuss">
            <img src="./img/close.png" alt="menus" onClick={handleShow} />
          </div>
        ) : (
          <div className="menuss">
               <img src="./img/menus.png" alt="menus" onClick={handleShow} />
          </div>
        )}
      </div>
      <div className="dashcontent__divs">
        <div className="dash__header">
          <div className="h1__content">
            <h1 className="dash__h1">Repositories</h1>
            <p className="total__repo">total repositories</p>
            <div className="input">
              <img src="./img/d10.png" alt="search icon" />
              <input type="text" placeholder="search repository" />
            </div>
          </div>
          <div className="button__divs">
            <button className="refresh__btn">
              <img
                src="./img/d9.png"
                alt="button img"
                className="refresh__img"
              />
              <span>Refresh All</span>
            </button>
            <button className="repo__btn">
              <img
                src="./img/d8.png"
                alt="button img"
                className="refresh__img"
              />
              <span>Add Repository</span>
            </button>
          </div>
        </div>
        <div className="dash__repo">
          <div className="repo__divss">
            {dashData.map((data) => {
              return [
                <div className="repo__con" key={data.id}>
                  <div className="repo__conss">
                    <div className="repo__cons">
                      <span>{data.title}</span>
                      <div className="public">{data.public}</div>
                    </div>
                    <div className="repo__des">
                      <div className="major">
                        <span>{data.course}</span>
                        <img src={data.img1} alt="repo__img" />
                      </div>
                      <div className="majorS">
                        <img src={data.img2} alt="repo__img" />
                        <span>{data.kilobyte}</span>
                      </div>
                      <div className="majorS">
                        <span>{data.time}</span>
                      </div>
                    </div>
                  </div>
                </div>,
              ];
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardContent;
