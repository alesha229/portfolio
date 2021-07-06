import './additional.css';
import React from 'react';
function Additional() {
  return (
    <div className="additional_container">
      <div className="wrapper fix_wrp">
        <div className="additional_wrapper">
          <h1>Additional technologies</h1>
          <div className="card_container">
            <div className="flex-b">
              <div className="card_add">
                <div className="webpack_img svg_img"></div>
              </div>
              <p className="center">webpack</p>
            </div>
            <div className="flex-b">
              <div className="card_add">
                <div className="bootstrap4_img svg_img"></div>
              </div>
              <p className="center">bootsrap4</p>
            </div>
            <div className="flex-b">
              <div className="card_add">
                <div className="html_img svg_img"></div>
              </div>
              <p className="center">html</p>
            </div>
            <div className="flex-b">
              <div className="card_add">
                <div className="css_img svg_img"></div>
              </div>
              <p className="center">css</p>
            </div>
          </div>
          <div className="card_container">
            <div className="flex-b">
              <div className="card_add">
                <div className="nodejs_img svg_img"></div>
              </div>
              <p className="center">nodejs</p>
            </div>
            <div className="flex-b">
              <div className="card_add">
                <div className="docker_img svg_img"></div>
              </div>
              <p className="center">docker</p>
            </div>
            <div className="flex-b">
              <div className="card_add">
                <div className="es6_img svg_img"></div>
              </div>
              <p className="center">es6</p>
            </div>
            <div className="flex-b">
              <div className="card_add">
                <div className="ngnix_img svg_img"></div>
              </div>
              <p className="center">ngnix</p>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
}

export default Additional;
