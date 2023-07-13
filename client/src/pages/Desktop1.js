import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Desktop1.css";
import React from "react";
const Desktop1 = () => {
  const navigate = useNavigate();

  const onButtonLogInContainerClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className="desktop-1">
      <div className="header">
        <img className="bg-icon" alt="" src="/bg.svg" />
        <img className="image-icon" alt="" src="/image@2x.png" />
        <div className="text1">
          <div className="video">
            <div className="text2">
              <b className="lets-get-started">Let’s get started!</b>
              <div className="watch-this-quick">
                Watch this quick demo video to see how to get started.
              </div>
            </div>
            <img className="icon" alt="" src="/icon.svg" />
          </div>
          <div className="this-website-aims">
            This website aims to provide users with a tool to upload CSV files
            containing stock data and analyze the machine learning-based
            decision-making process for buying and selling stocks. The primary
            objective is to interpret the trading strategy employed by the
            machine learning model and identify the key factors that contribute
            to its decision-making process.
          </div>
          <div className="interpretability-of-a">
            interpretability of a supervised learning-based trading strategy
          </div>
        </div>
        <div className="top-menu">
          <div className="separator" />
          <div className="nav-items">
            <div className="tutorial">TUTORIAL</div>
            <div className="menu">Menu</div>
            <div className="resources">Resources</div>
          </div>
        </div>
      </div>
      <div className="images">
        <div className="image">
          <div className="text3">
            <p className="blank-line">&nbsp;</p>
          </div>
          <img className="image-child" alt="" src="/rectangle-8.svg" />
          <div className="price-wrapper">
            <div className="price">
              <div className="eth">5.0 ETH</div>
              <img
                className="ethereum-icon-purple-2-1"
                alt=""
                src="/ethereumiconpurple-2-1.svg"
              />
            </div>
          </div>
          <div className="image-4" />
          <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        </div>
        <div className="image1">
          <div className="lost-in-space">Lost In Space</div>
          <img className="image-item" alt="" src="/rectangle-8.svg" />
          <img
            className="merlin-184196631-939fb22d-b909-icon"
            alt=""
            src="/merlin-184196631-939fb22db909420599d9b464fb961d32articlelarge-1@2x.png"
          />
          <div className="price-container">
            <div className="price1">
              <div className="eth">3.0 ETH</div>
              <img
                className="ethereum-icon-purple-2-1"
                alt=""
                src="/ethereumiconpurple-2-1.svg"
              />
            </div>
          </div>
        </div>
        <div className="image2">
          <div className="god-of-war">God of War</div>
          <img className="image-child" alt="" src="/rectangle-8.svg" />
          <div className="rectangle-div" />
          <img className="avatar-1-icon" alt="" src="/avatar-1@2x.png" />
          <div className="price-frame">
            <div className="price2">
              <div className="eth">7.0 ETH</div>
              <img
                className="ethereum-icon-purple-2-1"
                alt=""
                src="/ethereumiconpurple-2-11.svg"
              />
            </div>
          </div>
        </div>
        <div className="image3">
          <div className="the-watchers">The Watchers</div>
          <img className="image-child" alt="" src="/rectangle-8.svg" />
          <img className="image-child1" alt="" src="/rectangle-105@2x.png" />
          <div className="price-wrapper">
            <div className="price">
              <div className="eth">3.2 ETH</div>
              <img
                className="ethereum-icon-purple-2-1"
                alt=""
                src="/ethereumiconpurple-2-11.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="images1">
        <div className="image">
          <div className="the-watchers">Ancient Ones</div>
          <img className="image-child" alt="" src="/rectangle-8.svg" />
          <div className="price-wrapper">
            <div className="price">
              <div className="eth">5.0 ETH</div>
              <img
                className="ethereum-icon-purple-2-1"
                alt=""
                src="/ethereumiconpurple-2-11.svg"
              />
            </div>
          </div>
          <div className="image-4" />
          <img className="image-1-icon" alt="" src="/image-1@2x.png" />
        </div>
        <div className="image1">
          <div className="lost-in-space">Lost In Space</div>
          <img className="image-item" alt="" src="/rectangle-8.svg" />
          <img
            className="merlin-184196631-939fb22d-b909-icon"
            alt=""
            src="/merlin-184196631-939fb22db909420599d9b464fb961d32articlelarge-1@2x.png"
          />
          <div className="price-container">
            <div className="price1">
              <div className="eth">3.0 ETH</div>
              <img
                className="ethereum-icon-purple-2-1"
                alt=""
                src="/ethereumiconpurple-2-11.svg"
              />
            </div>
          </div>
        </div>
        <div className="image2">
          <div className="god-of-war">God of War</div>
          <img className="image-child" alt="" src="/rectangle-8.svg" />
          <div className="rectangle-div" />
          <img className="avatar-1-icon" alt="" src="/avatar-1@2x.png" />
          <div className="price-frame">
            <div className="price2">
              <div className="eth">7.0 ETH</div>
              <img
                className="ethereum-icon-purple-2-1"
                alt=""
                src="/ethereumiconpurple-2-11.svg"
              />
            </div>
          </div>
        </div>
        <div className="image3">
          <div className="the-watchers">The Watchers</div>
          <img className="image-child" alt="" src="/rectangle-8.svg" />
          <img className="image-child1" alt="" src="/rectangle-105@2x.png" />
          <div className="price-wrapper">
            <div className="price">
              <div className="eth">3.2 ETH</div>
              <img
                className="ethereum-icon-purple-2-1"
                alt=""
                src="/ethereumiconpurple-2-11.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="button-log-in" onClick={onButtonLogInContainerClick}>
        <div className="button-log-in-child" />
        <b className="upload-your-cvs">UPLOAD YOUR CVS FILE HERE</b>
      </div>
      <div className="text4">
        <div className="button1">
          <div className="button-item" />
          <div className="give-us-feedback">Give us feedback here</div>
        </div>
        <div className="we-are-lehigh">{`We are Lehigh University’s research team on interpretability of a supervised-learning based strategy. `}</div>
        <div className="title">
          <div className="ellipse" />
          <div className="about-us">ABOUT US</div>
        </div>
      </div>
    </div>
  );
};

export default Desktop1;
