import { useState } from "react";
import "./App.css";
import clothingVideo from "./videos/clothing.mp4";

import background from "./images/background.png";
import background2 from "./images/background2.png";

import men1 from "./images/men1 clothing.png";
import men1Zoom from "./images/men1 clothing zoom.png";

import men2 from "./images/men2 clothing.png";
import men2Zoom from "./images/men2 clothing zoom.png";

import women1 from "./images/women1 clothing.png";
import women1Zoom from "./images/women1 clothing zoom.png";

import women2 from "./images/women2 clothing.png";
import women2Zoom from "./images/women2 clothing zoom.png";

function App() {
  const [videoEnded, setVideoEnded] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: "men1",
      category: "MEN",
      cardImage: men1,
      detailImage: men1Zoom,
      name: "RASTAH ESSENTIAL 01",
      price: "PKR 18,500",
      description:
        "A refined everyday piece shaped through Rastah's contemporary approach to culture and clothing.",
    },
    {
      id: "men2",
      category: "MEN",
      cardImage: men2,
      detailImage: men2Zoom,
      name: "RASTAH ESSENTIAL 02",
      price: "PKR 21,500",
      description:
        "A modern silhouette balancing understated detail with a distinctly Rastah character.",
    },
    {
      id: "women1",
      category: "WOMEN",
      cardImage: women1,
      detailImage: women1Zoom,
      name: "RASTAH WOMEN 01",
      price: "PKR 19,500",
      description:
        "Contemporary clothing shaped around expressive form, texture and cultural influence.",
    },
    {
      id: "women2",
      category: "WOMEN",
      cardImage: women2,
      detailImage: women2Zoom,
      name: "RASTAH WOMEN 02",
      price: "PKR 22,500",
      description:
        "A considered piece designed for the space between heritage and the present.",
    },
  ];

  return (
    <>
      {/* =========================================
          SECTION 1 — EXISTING CINEMATIC PAGE
          ========================================= */}

      <main className="hero">
        <video
  className="hero-video"
  src={clothingVideo}
  autoPlay
  muted
  playsInline
  controls={false}
  onEnded={() => {
    setVideoEnded(true);
  }}
/>

        <nav className={`navbar ${videoEnded ? "navbar-visible" : ""}`}>
          <div className="logo">RASTAH</div>

          <div className="nav-links">
            <a href="#">COLLECTION</a>
            <a href="#">STORY</a>
            <a href="#">WORLD</a>
            <a href="#">SHOP</a>
          </div>

          <button className="menu-button">MENU</button>
        </nav>

        <section
          className={`intro ${videoEnded ? "intro-visible" : ""}`}
        >
          <div className="present-label">
            CRAFTED IN THE PRESENT
          </div>

          <h2>
            A NEW WAY
            <br />
            OF SEEING CLOTHING
          </h2>

          <p>
            Rooted in culture.
            <br />
            Reimagined for the present.
          </p>

          <button className="discover-button">
            DISCOVER THE COLLECTION
            <span>↗</span>
          </button>
        </section>

        <div
          className={`bottom-info ${
            videoEnded ? "bottom-visible" : ""
          }`}
        >
          <span>LAHORE / PAKISTAN</span>
          <span>EST. 2012</span>
          <span>SCROLL TO EXPLORE</span>
        </div>
      </main>


      {/* =========================
    SECTION 2 — COLLECTION
    ========================= */}

<section
  className={`collection-section ${
    selectedProduct ? "collection-detail-active" : ""
  }`}
  style={{ backgroundImage: `url(${background})` }}
>
  {!selectedProduct ? (

    <div className="collection-content">

      {/* HEADER */}

      <div className="collection-heading">
        <span>OUR COLLECTION</span>

        <h1>TIMELESS ESSENTIALS</h1>

        <p>
          Crafted for the ones who move different.
        </p>

        <div className="heading-line"></div>
      </div>


      {/* FOUR COLLECTION CARDS */}

      <div className="clothing-grid">

        {products.map((product) => (
          <button
            className="clothing-card"
            key={product.id}
            onClick={() => setSelectedProduct(product)}
          >

            <div className="clothing-image-wrapper">

              {/* IMPORTANT:
                  This uses cardImage = NORMAL IMAGE
              */}

              <img
                src={product.cardImage}
                alt={product.name}
              />

              <div className="card-gradient"></div>

              <div className="card-overlay">
                <span>VIEW PIECE</span>
                <span className="card-arrow">↗</span>
              </div>

              <div className="card-number">
                0{product.id === "men1" ? "1" :
                   product.id === "men2" ? "2" :
                   product.id === "women1" ? "3" : "4"}
              </div>

            </div>


            {/* CARD INFORMATION */}

            <div className="card-info">

              <div>
                <span className="card-category">
                  {product.category}
                </span>

                <span className="card-name">
                  {product.name}
                </span>
              </div>

              <span className="card-price">
                {product.price}
              </span>

            </div>

          </button>
        ))}

      </div>


      {/* BOTTOM INFORMATION */}

      <div className="collection-bottom">

        <span>02 / 04</span>

        <span>PREMIUM FABRICS&nbsp;&nbsp; / &nbsp;&nbsp;TIMELESS STYLE</span>

      </div>

    </div>

  ) : (

    /* =====================================
       PRODUCT DETAIL
       ===================================== */

    <div className="product-detail">

      <button
        className="detail-back"
        onClick={() => {
          setSelectedProduct(null);
        }}
      >
        ← BACK TO COLLECTION
      </button>


      <div className="detail-image">

        <img
          src={selectedProduct.detailImage}
          alt={selectedProduct.name}
        />

      </div>


      <div className="detail-info">

        <span className="detail-category">
          {selectedProduct.category}
        </span>

        <h2>
          {selectedProduct.name}
        </h2>

        <div className="detail-price">
          {selectedProduct.price}
        </div>

        <p>
          {selectedProduct.description}
        </p>

        <button className="detail-action">
          EXPLORE PIECE
          <span>↗</span>
        </button>

      </div>

    </div>

  )}

</section>
      {/* =========================
          SECTION 3 — THE STORY
          ========================= */}

      <section
        className="story-section"
        style={{ backgroundImage: `url(${background2})` }}
      >

        <div className="story-overlay"></div>

        <div className="story-content">

          <div className="story-label">
            03 / THE STORY
          </div>

          <div className="story-line"></div>

          <h2>
            MORE THAN
            <br />
            CLOTHING
          </h2>

          <p>
            RASTAH is a reflection of culture,
            <br />
            heritage and the people who carry it forward.
            <br />
            A journey of roots, movement and vision.
          </p>

          <button className="story-button">
            WATCH THE STORY
            <span>↗</span>
          </button>

        </div>


        <div className="story-bottom">

          <span>03 / 04</span>

          <span>
            HERITAGE&nbsp;&nbsp; / &nbsp;&nbsp;CULTURE&nbsp;&nbsp; / &nbsp;&nbsp;TOMORROW
          </span>

        </div>

      </section>
    </>
  );
}

export default App;