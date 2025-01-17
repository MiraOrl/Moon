import React from "react";
import "./../Section/section.css";
import Right from "./../img/icons/Right.svg";
import Left from "./../img/icons/Left.svg";
import Heart from "./../img/icons/Heart.svg";
import Section1 from "./../img/section1.png";
import Section2 from "./../img/section2.png";
import Section3 from "./../img/section3.png";
import Section4 from "./../img/section4.png";
function Section() {
  return (
    <div>
      <section className="similar-items">
        <div className="container">
          <div className="descr">
            <h3 className="descr-title">Similar items</h3>
            <div className="scrolling">
              <img src={Left} alt="left" />
              <img src={Right} alt="Right" />
            </div>
          </div>
          <div className="content">
            <div className="box">
              <div className="img">
                <img src={Section1} alt="vase" />
                {/* <img src={Heart} alt="heart" /> */}
              </div>
              <div className="description">
                <h4 className="title">Small Ecru Ceramic Compote</h4>
                <p className="price">$49.00</p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={Section2} alt="vase" />
                {/* <img src={Heart} alt="heart" /> */}
              </div>
              <div className="description">
                <h4 className="title">Warrick White Vase 14</h4>
                <p className="price">$49.00</p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={Section3} alt="vase" />
                {/* <img src={Heart} alt="heart" /> */}
              </div>
              <div className="description">
                <h4 className="title">Porcelain Dinner Plate</h4>
                <p className="price">$49.00</p>
              </div>
            </div>
            <div className="box">
              <div className="img">
                <img src={Section4} alt="vase" />
                {/* <img src={Heart} alt="heart" /> */}
              </div>
              <div className="description">
                <h4 className="title">Warrick White Vase 20</h4>
                <p className="price">$49.00</p>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="favorites">
          <img src={Hearts} alt="Colors" />
        </div> */}
      </section>
    </div>
  );
}

export default Section;
