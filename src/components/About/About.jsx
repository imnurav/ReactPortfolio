import React from "react";
import "./about.css";
import ME from "../../assets/v.jpg";
import { FaAward } from "react-icons/fa";
// import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
const About = () => {
  function getYearAndMonthDifference() {
    const startDate = new Date("2023-01-09");
    const endDate = new Date();
    const startYear = startDate.getFullYear();
    const startMonth = startDate.getMonth();
    const endYear = endDate.getFullYear();
    const endMonth = endDate.getMonth();
    let yearDiff = endYear - startYear;
    let monthDiff = endMonth - startMonth;

    if (monthDiff < 0) {
      yearDiff--;
      monthDiff += 12;
    }

    return { years: yearDiff, months: monthDiff };
  }

  const difference = getYearAndMonthDifference();

  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icons" />
              <h5>Experience</h5>
              <small>
                {difference.years} Year {difference.months} Month
              </small>
            </article>

            {/* <article className="about__card">
              <FiUsers className="about__icons" />
              <h5>Clients</h5>
              <small>200 + worldwide</small>
            </article> */}

            <article className="about__card">
              <VscFolderLibrary className="about__icons" />
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>

          <p>
            My name is Varun Kumar I have recently completed B.Tech from
            Maharshi Dayanand University [ Rohtak, Haryana ]. My area of
            interest includes web development and app development. I am looking
            forward to connect with engineers and other professionals working in
            same field.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
