import {
  Gif,
  PhotoCamera,
  FormatListBulleted,
  Event,
  Public,
} from "@material-ui/icons";
import userImg from "../../assets/images/user-image.png";

import React from "react";
import "./feed.scss";
import NavBar from "../../components/topbar/Topbar";
import Footer from "../../components/footer/footer";

export default function Feed() {
  return (
    <div>
      <NavBar />
      <div className="feed-container">
        <div className="container-left">
          <h1>test</h1>
        </div>
        <div className="container-middle">
          <div className="feed-container">
            <div className="input-container">
              <div className="input">
                <img src={userImg} alt="Photo de Profil" />
                <button>Quoi de neuf, UserName ?</button>
              </div>
              <div className="share">
                <button>
                  <PhotoCamera />
                  Photo
                </button>
                <button>
                  <Gif />
                  Gif
                </button>
                <button>
                  <FormatListBulleted />
                  Sondage
                </button>
                <button>
                  <Event />
                  Événement
                </button>
              </div>
            </div>
            <div className="post-container">
              <div className="input">
                <div className="user">
                  <img src={userImg} alt="Photo de Profil" />
                  <div className="user-information">
                    <a href="#">Ricardo Nogueira</a>
                    <span>
                      Il y a 58min <Public />
                    </span>
                  </div>
                </div>
                <div className="post">
                  <iframe
                    src="https://giphy.com/embed/cPNXOm7ln8HwK7UcbV"
                    class="giphy-embed"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-right"></div>
      </div>
      <Footer />
    </div>
  );
}
