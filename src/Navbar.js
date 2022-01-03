// import shoppingCartImg from "./images/shoppingCart.png";

import headShoulder from "./images/headShoulder.png";

const Navbar = ({ searchInput, setSearchInput }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="navbar navbar-expand-lg fixed-top navbar-light bglmccsblue">
          <div className="container-fluid">
            <a className="navbar-brand" href={"/creas-crave-capstone/"}>
              CREAS CRAVE
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div
              className="collapse navbar-collapse navbar-left"
              id="navbarSupportedContent"
            >
              <div
                className="row"
                style={{
                  marginTop: 10,
                  marginRight: 20,
                }}
              >
                <div className="col">
                  <form className="d-flex">
                    <input
                      className="form-control me-2"
                      type="search"
                      placeholder="get creative"
                      aria-label="Search"
                      value={searchInput}
                      onChange={(event) => {
                        setSearchInput(event.target.value);
                      }}
                      id="searchInput"
                    />

                    {/* <button
                      className="btn btn-outline-light"
                      type="button"
                      id="searchSubmitBtn"
                      value="submit"
                      onSubmit={searchInput}
                      resetAfterSubmit={true}
                    >
                      search
                    </button> */}
                  </form>
                </div>
                {/* <div className="col-1" style={{ marginRight: 20 }}>
                  <img
                    className="img-responsive"
                    style={{ height: 37 }}
                    src={shoppingCartImg}
                    alt="Shopping Cart"
                    id="shopCart"
                  />
                </div> */}
                <div className="col-1">
                  <a href="https://creas-crave-frontend.herokuapp.com/">
                    <img
                      className="img-responsive"
                      style={{ height: 34, marginTop: 3, paddingRight: 410 }}
                      src={headShoulder}
                      alt="Head and Shoulders"
                      id="headShoulder"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};
export default Navbar;
