import lmDevLogoImg from "./images/lmDevLogo.png";
import { useEffect, useState } from "react";

const Footer = () => {
  const [sanJoseTemp, setSanJoseTemp] = useState();
  const [albanyTemp, setAlbanyTemp] = useState();
  useEffect(() => {
    (async () => {
      const weatherRaw = await fetch(
        `https://creas-crave-backend.herokuapp.com/weatherSanJose`,
        {
          method: "GET",
        }
      );
      const data = await weatherRaw.json();
      setSanJoseTemp(Math.round(data.sanJoseTemp));
    })();
    (async () => {
      const weatherRes = await fetch(
        `https://creas-crave-backend.herokuapp.com/weatherAlbany`,
        {
          method: "GET",
        }
      );
      const data = await weatherRes.json();
      setAlbanyTemp(Math.round(data.albanyTemp));
    })();
  }, []);
  return (
    <div className="container-fluid footer" id="lineHte">
      <div
        className="row"
        style={{ marginTop: -45, backgroundColor: "#c8c4bd" }}
      >
        <div className="col-4"></div>
        <div className="col-4">
          <div className="row">
            <div className="col-3">
              {sanJoseTemp ? (
                <p
                  style={{
                    marginTop: 60,
                    fontFamily: "Madrone Std",
                    fontSize: 27,
                    color: "#360836",
                  }}
                >
                  {sanJoseTemp}&#176;
                  <br />
                  <span
                    style={{
                      fontFamily: "Glacial Indifference",
                      fontSize: 7,
                      lineHeight: 5,
                    }}
                  >
                    costa rica
                  </span>
                </p>
              ) : null}
            </div>
            <div className="col-6">
              <h1
                className="capstone"
                style={{ paddingTop: 25, textAlign: "center" }}
              >
                CAPSTONE
              </h1>
            </div>
            <div className="col-3">
              {albanyTemp ? (
                <p
                  style={{
                    marginTop: 60,
                    fontFamily: "Madrone Std",
                    fontSize: 27,
                    color: "#360836",
                  }}
                >
                  {albanyTemp}&#176;
                  <br />
                  <span
                    style={{
                      fontFamily: "Glacial Indifference",
                      fontSize: 7,
                      lineHeight: 5,
                    }}
                  >
                    new york
                  </span>
                </p>
              ) : null}
            </div>
          </div>
          <h2 id="capstone" style={{ marginTop: -10 }}>
            Creas Crave eCommerce Portfolio
          </h2>
          <center>
            <p
              id="capstoneBlurb"
              style={{
                lineHeight: 1.25,
                textAlign: "justify",
                color: "#545454",
                paddingBottom: 25,
              }}
            >
              Create a portfolio-style eCommerce website titled 'CREAS CRAVE'.
              Fully wired. Fully operational. Offering original, high-quality
              b-roll videos in the left column. Unedited. In the right column,
              offering original high-quality b-roll videos - modestly edited to
              illustrate possibilities. All video quality reflects the original
              content as captured. All video captured at immersion visit in
              Costa Rica. Left column temperature based on San Jose, capital of
              Costa Rica, Central America api data from openWeatherApi. Right
              column temperature based on Albany, capital of New York, United
              States api data.
              <br />
              <br /> Each video ideal to serve as complementary footage if/when
              used in others' video projects.
              <br />
              <br />
              Essentially, my goal is to showcase my creative and design skills
              from content to website produced.
            </p>
          </center>
          <br />
        </div>
      </div>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <img
              className="mx-auto d-block img-responsive"
              id="lmdev-logo"
              src={lmDevLogoImg}
              style={{ width: "40%" }}
              alt="La'Tonia Mertica dot dev logo"
            />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row" id="footer-details">
          <div className="col">
            <h2>
              <span className="notbold">
                <p>La'Tonia Mertica</p>

                <div>
                  <p>
                    (
                    <span className="pronunciation">
                      luh tone yuh merr treece
                    </span>
                    )
                  </p>
                </div>

                <p id="lmTitle">Founder & Executive Officer</p>
                <br />

                <p>PUBLICLY ANONYMOUS, LLC</p>
                <p>
                  ©2019-2021 La'Tonia Mertica 'Communications & Creatives
                  Specialist'
                </p>
                <p>All Rights Reserved</p>
                <br />

                <p>2200 South Salina Street #684</p>
                <p>Syracuse, New York 13205</p>
                <p>
                  <a
                    href={"mailto: designs@latoniamertica.com"}
                    target="_blank"
                    rel="noreferrer"
                    id="emailLink"
                    className="emailHover"
                  >
                    designs@latoniamertica.com
                  </a>
                </p>
                <br />
              </span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
