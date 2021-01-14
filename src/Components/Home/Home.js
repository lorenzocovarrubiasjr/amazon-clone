import React from "react";
import "./Home.css";

import Product from "../Product/Product";

function Home() {
  return (
    <div className="home">
      <div className="top-banner">
        <img
          className="top-banner-img"
          src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTQzYWRkNWYt/YTQzYWRkNWYt-ZDkyNTQ5OGMt-w1500._CB413865922_.jpg"
          alt="top banner"
        />
      </div>

      <div className="row">
        <Product
          id="10"
          title="Switching Lanes Shirt"
          price={24.99}
          image="https://static.wixstatic.com/media/d63a2d_1dc3756121d84cc2ae5792c885a233de~mv2.jpg/v1/fill/w_293,h_293,al_c,q_80,usm_0.66_1.00_0.01/d63a2d_1dc3756121d84cc2ae5792c885a233de~mv2.webp"
          rating={5}
        />
        <Product
          id="11"
          title="God Over Money Hat"
          price={19.99}
          image="https://images-na.ssl-images-amazon.com/images/I/81v87wFUw3L._AC_UX679_.jpg"
          rating={4}
        />
      </div>

      <div className="row">
        <Product
          id="1"
          title="Switching Lanes EP"
          price={9.99}
          image="https://m.media-amazon.com/images/I/610sRhooiBL._UX358_FMwebp_QL85_.jpg"
          rating={5}
        />
        <Product
          id="2"
          title="God City"
          price={5.99}
          image="https://m.media-amazon.com/images/I/810N9qVqf3L._SS500_.jpg"
          rating={4}
        />
        <Product
          id="3"
          title="Death Certificate"
          price={9.99}
          image="https://m.media-amazon.com/images/I/61UbznUvH-L._UX358_FMwebp_QL85_.jpg"
          rating={4}
        />
      </div>

      <div className="row">
        <Product
          id="21"
          title="116 Beanie"
          price={14.99}
          image="https://images-na.ssl-images-amazon.com/images/I/71LATo4CR6L._AC_UX679_.jpg"
          rating={4}
        />
      </div>
    </div>
  );
}

export default Home;
