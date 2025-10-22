import React from "react";
import ProductCard from "../Common/ProductCards";
import Footer from "../Common/Footer";
import { Header } from "../Common/Header";
import section3Img from "./images/banner-2.jpg";
import section4Img from "./images/banner-3.jpg";

const products = [
  {
    id: 1,
    name: "Fresh Organic Tomatoes",
    price: "₱120 / kilo",
    image: "./images/banner-2.jpg",
  },
  {
    id: 2,
    name: "Crisp Green Lettuce",
    price: "₱80 / bundle",
    image: "../images/banner-3.jpg",
  },
  {
    id: 3,
    name: "Sweet Mangoes",
    price: "₱150 / kilo",
    image: "../images/mangoes.jpg",
  },
  {
    id: 4,
    name: "Brown Organic Eggs",
    price: "₱200 / dozen",
    image: "../images/eggs.jpg",
  },
];

export const Home = () => {
  const handleAddToCart = (product) => {
    alert(`${product.name} added to cart!`);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "#f9fff9",
      }}
    >
      <Header />

      <main style={{ flex: 1 }}>
        <section className="top-banner">
          <div className="banner-content">
            <h2>Welcome to Farmers Market</h2>
            <p>Fresh from our fields to your table.</p>
          </div>
        </section>

        <section className="section-2">
          <div className="container">
            <h2 className="section-title">Fresh from the Farm 🌾</h2>

            <div className="product-grid">
              {products.map((product) => (
                <ProductCard
                  key={product.id}
                  image={product.image}
                  name={product.name}
                  price={product.price}
                  onAddToCart={() => handleAddToCart(product)}
                />
              ))}
            </div>
          </div>
        </section>

        <section>
          <div className="container section3-container">
            <div className="section3-content">
              <div className="section3-image">
                <img src={section3Img} alt="Fresh Produce" />
              </div>

              <div className="section3-text">
                <h2>Fresh from the Farm</h2>
                <h4>Handpicked Organic Goodness 🌾</h4>
                <p>
                  Experience the pure taste of nature with our freshly harvested
                  organic produce. Every fruit and vegetable is handpicked with
                  care by local farmers to bring the best quality to your table.
                </p>

                <button className="shop-btn">Shop Now</button>
              </div>
            </div>
          </div>
        </section>

        <section className="section-4">
          <div className="container section4-container">
            <div className="section4-content">
              <div className="section4-text">
                <h2>Taste the Difference</h2>
                <h4>Locally Grown, Naturally Better 🍎</h4>
                <p>
                  Our farmers dedicate their time and passion to growing produce
                  that’s as healthy as it is delicious. Each crop is carefully
                  nurtured and harvested at peak freshness to ensure the best flavor
                  for your family.
                </p>

                <button className="learn-btn">Learn More</button>
              </div>

              <div className="section4-image">
                <img src={section4Img} alt="Local Produce" />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};
