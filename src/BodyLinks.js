import { useState } from "react";
import axios from "axios";

//CODE FOR FUNCTION PAIRED WITH CODE IN EACH SPAN SECTION BELOW TO JEST TEST
//TO TEST REPLACE INSTANCES OF TESTLINK THAT IS SECOND PARAMETER WITH NAME OF SPAN SECTION FOR EXAMPLE SUBSCRIBE, CONNECT, MYSTORY, PRICING, UNSUBSCRIBE
export const handleBodyLinks = (bodyLinks, testLink) => {
  if (bodyLinks === testLink) {
    return "";
  } else {
    return testLink;
  }
};

const BodyLinks = () => {
  const [underBodyLinks, setUnderBodyLinks] = useState();
  const [email, setEmail] = useState("");
  const [removeEmail, setRemoveEmail] = useState("");
  return (
    <div className="container-fluid">
      <div
        className="row"
        id="bodyLinks"
        style={{
          background: underBodyLinks ? "#360836" : "#545454",
        }}
      >
        <span
          className="col bodyLinks bodyLinkSubscribe"
          id="toSubscribe"
          onClick={() => {
            // CODE TO TEST SUBSCRIBE PAIRED WITH FN ABOVE
            const links = handleBodyLinks(underBodyLinks, "subscribe");
            setUnderBodyLinks(links);

            // if (underBodyLinks === "subscribe") {
            //   setUnderBodyLinks("");
            // } else {
            //   setUnderBodyLinks("subscribe");
            // }
          }}
          style={{
            textDecoration:
              underBodyLinks === "subscribe" ? "underline" : "none",
          }}
        >
          SUBSCRIBE
        </span>

        <span
          className="col bodyLinks bodyLinkConnect"
          id="toConnect"
          onClick={() => {
            // CODE TO TEST CONNECT PAIRED WITH FN ABOVE
            const links = handleBodyLinks(underBodyLinks, "connect");
            setUnderBodyLinks(links);

            // if (underBodyLinks === "connect") {
            //   setUnderBodyLinks("");
            // } else {
            //   setUnderBodyLinks("connect");
            // }
          }}
          style={{
            textDecoration: underBodyLinks === "connect" ? "underline" : "none",
          }}
        >
          CONNECT
        </span>

        <span
          className="col bodyLinks bodyLinkMyStory"
          id="toMyStory"
          onClick={() => {
            // CODE TO TEST MYSTORY PAIRED WITH FN ABOVE
            const links = handleBodyLinks(underBodyLinks, "myStory");
            setUnderBodyLinks(links);

            // if (underBodyLinks === "myStory") {
            //   setUnderBodyLinks("");
            // } else {
            //   setUnderBodyLinks("myStory");
            // }
          }}
          style={{
            textDecoration: underBodyLinks === "myStory" ? "underline" : "none",
            zIndex: 3,
          }}
        >
          MY STORY
        </span>

        <span
          className="col bodyLinks bodyLinkPricing"
          id="toPricing"
          onClick={() => {
            // CODE TO TEST PRICING PAIRED WITH FN ABOVE
            const links = handleBodyLinks(underBodyLinks, "pricing");
            setUnderBodyLinks(links);

            // if (underBodyLinks === "pricing") {
            //   setUnderBodyLinks("");
            // } else {
            //   setUnderBodyLinks("pricing");
            // }
          }}
          style={{
            textDecoration: underBodyLinks === "pricing" ? "underline" : "none",
          }}
        >
          PRICING
        </span>

        <span
          className="col bodyLinks bodyLinkUnsubscribe"
          id="toUnsubscribe"
          onClick={() => {
            // CODE TO TEST UNSUBSCRIBE PAIRED WITH FN ABOVE
            const links = handleBodyLinks(underBodyLinks, "unsubscribe");
            setUnderBodyLinks(links);

            // if (underBodyLinks === "unsubscribe") {
            //   setUnderBodyLinks("");
            // } else {
            //   setUnderBodyLinks("unsubscribe");
            // }
          }}
          style={{
            textDecoration:
              underBodyLinks === "unsubscribe" ? "underline" : "none",
          }}
        >
          UNSUBSCRIBE
        </span>

        <div className="row" id="underBodyLinks">
          {underBodyLinks === "subscribe" ? (
            <div className="col" id="bodyLinkSubscribe">
              <div
                className="row"
                style={{ marginTop: underBodyLinks === "" ? 0 : 37 }}
              >
                <span className="row" id="toSubscribe">
                  <div className="input-group" id="input-groupForm">
                    <input
                      type="text"
                      className="form-control"
                      id="emailInput"
                      placeholder="enter email to subscribe"
                      aria-label="your email"
                      aria-describedby="submit"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}

                      // required
                    />
                    <button
                      className="btn btn-dark"
                      id="toInputInSubscribe"
                      onClick={() => {
                        const emailToSend = email;
                        setEmail("");
                        axios
                          .post(
                            "https://creas-crave-backend.herokuapp.com/subscribers",
                            {
                              emailAddress: emailToSend,
                              subscribed: true,
                            }
                          )
                          .then(() => {
                            alert("Subscribed!");
                          });
                        // console.log(email);
                      }}
                      style={{
                        backgroundColor: "#360836",
                        borderColor: "#5ce1e6",
                      }}
                    >
                      submit
                    </button>
                  </div>
                </span>
              </div>
            </div>
          ) : null}
          {underBodyLinks === "connect" ? (
            <div
              className="col"
              id="bodyLinkConnect"
              style={{
                marginTop: underBodyLinks === "" ? 0 : 15,
                marginBottom: -20,
              }}
            >
              <div className="row">
                <span className="row" id="toConnect">
                  <a
                    href="https://www.latoniamertica.dev"
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <p id="gatewayText">
                      digital{" "}
                      <span id="portfolioText">
                        <span id="curlyBraces">&#123;</span>
                        &nbsp;portfolio&nbsp;
                        <span id="curlyBraces">&#125;</span>
                      </span>{" "}
                      gateway
                    </p>
                  </a>
                </span>
              </div>
            </div>
          ) : null}

          {underBodyLinks === "myStory" ? (
            <div className="col" id="bodyLinkMyStory">
              <div
                className="row"
                style={{
                  marginTop: underBodyLinks === "" ? 0 : 27,
                  marginBottom: -17,
                }}
              >
                <span className="row" id="toMyStory">
                  <p className="centerStoryText">
                    words and writing inspire me to communicate exceptionally
                    <br />
                    <span id="dashSign">- </span>without lack of appreciation
                    for effort required<span id="dashSign"> -</span> <br />
                    <span id="mostChallengingCommitment">
                      code/web dev is my most challenging commitment to
                      exceptional communication
                    </span>
                  </p>
                </span>
              </div>
            </div>
          ) : null}
          {underBodyLinks === "pricing" ? (
            <div className="col" id="bodyLinkPricing">
              <div
                className="row"
                style={{
                  marginTop: underBodyLinks === "" ? 0 : 25,
                  marginBottom: -35,
                  zIndex: 2,
                }}
              >
                <div>
                  <span className="row" id="toPricing">
                    <p className="pricingText justify-content-center">
                      <sup id="dollarSign">$</sup>

                      <span id="fortyFour">44</span>

                      <span id="perVideo">per video</span>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          ) : null}
          {underBodyLinks === "unsubscribe" ? (
            <div className="col" id="bodyLinkUnsubscribe">
              <div
                className="row"
                style={{ marginTop: underBodyLinks === "" ? 0 : 37 }}
              >
                <span className="row" id="toUnsubscribe">
                  <div className="input-group" id="input-groupForm">
                    <input
                      type="text"
                      className="form-control"
                      id="emailInput"
                      placeholder="unsubscribe your email"
                      aria-label="your email"
                      aria-describedby="submit"
                      value={removeEmail}
                      onChange={(event) => setRemoveEmail(event.target.value)}
                      // required
                    />
                    <button
                      className="btn btn-dark"
                      id="toInputInUnsubscribe"
                      onClick={() => {
                        const emailToRemove = removeEmail;
                        setRemoveEmail("");
                        axios
                          .post(
                            "https://creas-crave-backend.herokuapp.com/subscribers",
                            {
                              emailAddress: emailToRemove,
                              subscribed: false,
                            }
                          )
                          .then(() => {
                            alert("Unsubscribed!");
                          });
                      }}
                      style={{
                        backgroundColor: "#360836",
                        borderColor: "#5ce1e6",
                      }}
                    >
                      submit
                    </button>
                  </div>
                </span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};
export default BodyLinks;
