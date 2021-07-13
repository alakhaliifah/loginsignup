import { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import login from "./images/rocket.svg";
import register from "./images/press-play.svg";

function App() {
  const [signupMode, setSignupMode] = useState("");

  const signupBtn = () => {
    setSignupMode("sign-up-mode");
  };

  const signinBtn = () => {
    setSignupMode("");
  };

  return (
    <div className={"app" + " " + signupMode}>
      <div className="forms-container">
        <div className="signin-signup">
          <form action="" className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faLock} />
              </span>

              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Login" className="btn solid" />

            <p className="social-text">Or Sign in with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <span className="icon">
                  <FontAwesomeIcon icon={faGoogle} />
                </span>
              </a>
              <a href="#" className="social-icon">
                <span className="icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
              </a>
              <a href="#" className="social-icon">
                <span className="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </a>
              <a href="#" className="social-icon">
                <span className="icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </a>
            </div>
          </form>

          <form action="" className="sign-up-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input type="text" placeholder="Username" />
            </div>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input type="email" placeholder="Email" />
            </div>
            <div className="input-field">
              <span className="icon">
                <FontAwesomeIcon icon={faLock} />
              </span>
              <input type="password" placeholder="Password" />
            </div>
            <input type="submit" value="Sign up" className="btn solid" />
            <p className="social-text">Or Sign up with social platforms</p>
            <div className="social-media">
              <a href="#" className="social-icon">
                <span className="icon">
                  <FontAwesomeIcon icon={faGoogle} />
                </span>
              </a>
              <a href="#" className="social-icon">
                <span className="icon">
                  <FontAwesomeIcon icon={faFacebook} />
                </span>
              </a>
              <a href="#" className="social-icon">
                <span className="icon">
                  <FontAwesomeIcon icon={faTwitter} />
                </span>
              </a>
              <a href="#" className="social-icon">
                <span className="icon">
                  <FontAwesomeIcon icon={faLinkedin} />
                </span>
              </a>
            </div>
          </form>
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              laborum blanditiis repellat.
            </p>
            <button
              className="btn transparent"
              id="sign-up-btn"
              onClick={signupBtn}
            >
              Sign up
            </button>
          </div>
          <img src={login} className="image" alt="" />
        </div>

        <div className="panel right-panel">
          <div className="content">
            <h3>One of us?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
              laborum blanditiis repellat.
            </p>
            <button
              className="btn transparent"
              id="sign-in-btn"
              onClick={signinBtn}
            >
              Sign in
            </button>
          </div>
          <img src={register} className="image" alt="" />
        </div>
      </div>
    </div>
  );
}

export default App;
