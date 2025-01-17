import "./../Main/main.css";
import MainOne from "./../img/main1.png";
import MainTwo from "./../img/main2.png";
import MainThree from "./../img/main3.png";
import MainFour from "./../img/main4.png";
import MainFive from "./../img/main5.png";
import MainSix from "./../img/main6.png";
import Star from "./../img/star.png";
import Colors from "./../img/list.png";
import Hearts from "./../img/icons/Heart.svg";
import Shopping from "./../img/icons/shopping.svg";
import FaceBook from "./../img/icons/Facebook.svg";
import Twitter from "./../img/icons/Twitter.svg";
import LinkedIn from "./../img/icons/Linkedin.svg";
import YouTube from "./../img/icons/YouTube.svg";
import Plus from "./../img/icons/Plus.svg";
import Inst from "./../img/icons/Instagram.svg";

function Main() {
  return (
    <div>
      <div className="main">
        <div className="container">
          <div className="main-nav">
            <ul>
              <li>
                <a href="#">Home /</a>
              </li>
              <li>
                <a href="#">Shop /</a>
              </li>
              <li>
                <a href="#" className="main-link">
                  Product
                </a>
              </li>
            </ul>
          </div>

          <div className="content">
            <div className="box">
              <img src={MainOne} alt="dishes" />
              <div className="slide">
                <img src={MainTwo} alt="dishes" />
                <img src={MainThree} alt="dishes" />
                <img src={MainFour} alt="dishes" />
                <img src={MainFive} alt="dishes" />
                <img src={MainSix} alt="dishes" />
              </div>
            </div>
            <div className="box">
              <h2>MARTIN WHITE DINNER PLATE</h2>
              <div className="main-text">
                <div className="grade">
                  <img src={Star} alt="star" />
                  <p className="reviews">(1256 Reviews)</p>
                  <div className="stock">
                    <h4>Stock:</h4>
                    <p>In stock</p>
                  </div>
                </div>
              </div>
              <div className="price">
                <p>$35</p>
                <p>$50</p>
              </div>
              <div className="colors">
                <h3>Colors</h3>
                <img src={Colors} alt="Colors" />
              </div>
              <div className="btns">
                <button className="add">
                  Add to cart
                  {/* <img src={Shopping} alt="Shopping" /> */}
                </button>
                <div className="favorites">
                  <img src={Hearts} alt="Colors" />
                </div>
              </div>

              <div className="share-content">
                <p>Share this:</p>
                <img src={FaceBook} alt="FaceBook" />
                <img src={Twitter} alt="Twitter" />
                <img src={Inst} alt="Inst" />
                <img src={LinkedIn} alt="LinkedIn" />
                <img src={YouTube} alt="YouTube" />
              </div>
              <div className="action">
                <div className="action-descr">
                  <p>Details</p>
                  <img src={Plus} alt="plus" />
                </div>
                <hr />
                <div className="action-descr">
                  <p>Dimensions</p>
                  <img src={Plus} alt="plus" />
                </div>
                <hr />
                <div className="action-descr">
                  <p>Reviews</p>
                  <img src={Plus} alt="plus" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
