import { useState } from "react";
import NavShort from "./NavShort";
import Nav from "./Nav";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../footer/Footer";
function Signin() {
  const [switchLogin, setSwitchLogin] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const updateWindowWidth = () => {
    setWindowWidth(window.innerWidth);
  };
  window.addEventListener("resize", updateWindowWidth);
  const userSignin = async () => {
    try {
      if (email && username && password.length !== 0) {
        const user = {
          email,
          username,
          password,
        };
        const addUser = await axios.post(
          "https://shop-pdxc.onrender.com/signin",
          user
        );
        console.log(addUser.data);
        setEmail("");
        setUsername("");
        SetPassword("");
        navigate("/login");
      } else {
        alert("Please fill in the blank");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container ">
        {windowWidth < 767 ? (
          <>
            <NavShort></NavShort>
          </>
        ) : (
          <Nav></Nav>
        )}
        <div className="flex justify-evenly w-2/4">
          <p>Sign in</p>
          <Link to="/login">
            <input
              type="checkbox"
              className="toggle"
              onClick={() => {
                setSwitchLogin(!switchLogin);
              }}
            />
          </Link>
          <p>Login</p>
        </div>
        <div className="text-center p-5 ">
          <p className="m-3 text-3xl underline">Sign in</p>
          <label className="input input-bordered flex items-center gap-2 mb-3 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input
              type="email"
              className="grow"
              placeholder="Email"
              onChange={(ev) => {
                setEmail(ev.target.value);
              }}
              value={email}
            />
          </label>
          <label className="input input-bordered flex items-center gap-2 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
            </svg>
            <input
              type="text"
              className="grow"
              placeholder="Username"
              onChange={(ev) => {
                setUsername(ev.target.value);
              }}
              value={username}
            />
          </label>
          {!showPassword ? (
            <>
              <label className="input input-bordered flex items-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="password"
                  className="grow"
                  placeholder="Password"
                  onChange={(ev) => {
                    SetPassword(ev.target.value);
                  }}
                  value={password}
                />
                <label className="swap">
                  <input type="checkbox" />
                  <div
                    className="swap-on"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    Hide
                  </div>
                  <div className="swap-off">Show</div>
                </label>
              </label>
            </>
          ) : (
            <>
              <label className="input input-bordered flex items-center gap-2 mb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                    clipRule="evenodd"
                  />
                </svg>
                <input
                  type="text"
                  className="grow"
                  placeholder="Password"
                  onChange={(ev) => {
                    SetPassword(ev.target.value);
                  }}
                  value={password}
                />
                <label className="swap">
                  <input type="checkbox" />
                  <div className="swap-on">Hide</div>
                  <div
                    className="swap-off"
                    onClick={() => {
                      setShowPassword(!showPassword);
                    }}
                  >
                    Show
                  </div>
                </label>
              </label>
            </>
          )}

          <button className="btn btn-active btn-primary" onClick={userSignin}>
            Sign in
          </button>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
}

export default Signin;
