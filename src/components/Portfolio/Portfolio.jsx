import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/ReactEcom.png";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {/* <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Portfolio Site</h3>
          <div className="portfolio__item-cta">
            <a href="https://github.com/kumarnurav9811/Varun-sPortfolio" className="btn" rel=" noopener" target='_blank'>
              Github 
            </a>
            <a
              href="https://nurav.herokuapp.com"
              className="btn btn-primary"
              rel=" noopener" target='_blank'
            >
              Live Demo
            </a>
          </div>
        </article> */}

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>E-commerce Web App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kumarnurav9811/Ekart"
              className="btn"
              rel=" noopener noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://www.oswaldtruz.in"
              className="btn btn-primary"
              rel="noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>Blogging Web App</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kumarnurav9811/Blog"
              className="btn"
              rel=" noreferrer"
              target="_blank"
            >
              Github
            </a>
            {/* <a
              href="https://github.com/kumarnurav9811/Blog"
              className="btn btn-primary"
              rel=" noopener" target='_blank'
            >
              Live Demo
            </a> */}
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>E-Comm [ReactJs]</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kumarnurav9811/ReactJS-Ecommerce-site"
              className="btn"
              rel=" noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://sharmajistore.netlify.app/"
              className="btn btn-primary"
              rel=" noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Portfolio Site</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kumarnurav9811/Varun-sPortfolio"
              className="btn"
              rel=" noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://nurav.herokuapp.com"
              className="btn btn-primary"
              rel=" noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>Portfolio Site</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://github.com/kumarnurav9811/Varun-sPortfolio"
              className="btn"
              rel=" noreferrer"
              target="_blank"
            >
              Github
            </a>
            <a
              href="https://nurav.herokuapp.com"
              className="btn btn-primary"
              rel=" noreferrer"
              target="_blank"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
