import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Language Known</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PYTHON</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>

        {/* Frontend development */}
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JAVASCRIPT</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article> */}

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>REACT.JS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NEXT.JS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article> */}

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML || CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>BOOTSTRAP</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>TAILWIND CSS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>

        {/* Backend Development */}
        <div className="experience__backend">
          <h3>Backend Development</h3>

          <div className="experience__content">
          <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NODEJS</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>REST API</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>DJANGO</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>

            

            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article> */}

            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article> */}
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Django Rest Framework</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article> */}

            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article> */}
          </div>
        </div>

        <div className="experience__frontend">
          <h3>Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>DSA</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MONGO DB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>GIT || GITHUB</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>VS CODE</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
