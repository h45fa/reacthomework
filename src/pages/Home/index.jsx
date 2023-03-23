import React from "react";
import "./reset.css";
import "./Home.module.css";
import Card from "../../components/Card";
function Home(items, onAddToFavorite) {
  const renderItems = () => {
    items.map((item, index) => (
      <Card key={index} onFavorite={(obj) => onAddToFavorite(obj)} {...item} />
    ));
  };
  return (
    <main>
      <section class="banner">
        <div class="container">
          <div class="banner__wrapper">
            <img src="/img/image-home-07.jpg" alt="" />
            <div class="banner__overlay">
              <div>
                <h1 class="banner__title">Waffle Hooded Coat</h1>
                <a href="/" class="btn btn-dark">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="category">
        <div class="container">
          <h2 class="category__title">This Season Collection</h2>
          <div class="category__grid">
            <div class="category__item">
              <img src="/img/banner-20.jpg" alt="Glasses" />
              <div class="category__overlay">
                <a href="/" class="btn btn-dark">
                  Glasses
                </a>
              </div>
            </div>

            <div class="category__item">
              <img src="/img/banner-21.jpg" alt="Sneakers" />

              <div class="category__overlay">
                <a href="/" class="btn btn-dark">
                  Sneakers
                </a>
              </div>
            </div>

            <div class="category__item">
              <img src="/img/banner-22.jpg" alt="Handbags" />

              <div class="category__overlay">
                <a href="/" class="btn btn-dark">
                  Handbags
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="products">
        <div class="container">
          <h2 class="products__title">This Week's Highlights</h2>

          <div class="products__grid">{renderItems()}</div>

          <div class="products__bottom">
            <a href="/" class="btn btn-outline-primary">
              {" "}
              Shop Now{" "}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
