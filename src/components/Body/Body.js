import React from "react";
import Footer from "../footer/Footer";
import "./body.css";
import { Row, Col } from "react-bootstrap";
import Courses from "./Courses";
import Itskills from "./Itskills";

const Body = () => {
  window.addEventListener("scroll", () => {
    document.getElementById("stars").style.left = window.scrollY * 0.25 + "px";
    document.getElementById("moon").style.top = window.scrollY * 1.05 + "px";
    document.getElementById("mountains_behind").style.top =
      window.scrollY * 0.5 + "px";
    document.getElementById("mountains_front").style.top =
      window.scrollY * 0 + "px";
    document.getElementById("text").style.marginRight =
      window.scrollY * 3 + "px";
    document.getElementById("text").style.marginTop =
      window.scrollY * 1.3 + "px";
    document.querySelector("header").style.top = window.scrollY * 0.5 + "px";
  });

  return (
    <div>
      <header>
        <ul>
          <li>
            <a href="#" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#abouth">About</a>
          </li>
          <li>
            <a
              href="https://github.com/Alperyilma?tab=repositories"
              target="_blank"
            >
              Projects
            </a>
          </li>
          <li>
            <a href="#footer">Contact</a>
          </li>
        </ul>
      </header>
      <section>
        <img src="images/stars.png" id="stars" />
        <img src="images/moon.png" id="moon" />
        <img src="images/mountains_behind.png" id="mountains_behind" />
        <h2 id="text">ALPER YILMAZ</h2>

        <img src="images/mountains_front.png" id="mountains_front" />

      </section>
      <div className="sec" id="sec">
        <Row id="abouth">
          <Col className="coursescolumn" md={4}>
            {/* Curses */}
            <h3 className="courses text-center" style={{ color: "white" }}>
              CURSES
            </h3>
            <Courses title="JAVA IOT DEVELOPER" exp="INTEC BRUSSEL, 2022" />
            <Courses
              title="JAVA FULL STACK DEVELOPER"
              exp="TECH PRO EDUCATION, 2021, CALIFORNIA USA"
            />
            <Courses
              title="MECHATRONICA"
              exp="MILITAIRE UNIVERSITEIT, 2013, TURKIJE"
            />
            <Courses title="INONU HOGE SCHOOL" exp="2010, TURKIJE" />
          </Col>

          {/* IT SKILLS */}
          {/* Inner Right Column */}
          <Col md={6}>
            <h3 className="skills text-center" style={{ color: "white" }}>
              IT SKILLS
            </h3>
            <Row>
              <Col md={6}>
                <Itskills
                  title="Programing with Java"
                  exp1="Eclipse"
                  exp2="JAVA basis en OOP"
                />
                <Itskills
                  title="Database Systems & Web Server"
                  exp1="MySql"
                  exp2="SQL"
                  exp3="JDBC"
                  exp4="Hibernate/JPA"
                  exp5="Tomcat"
                />

                <Itskills
                  title="Object-oriented System Analysis"
                  exp1="UML"
                  exp2="Agile & Scrum"
                />
              </Col>
              <Col md={6}>
                <Itskills
                  title="Software development"
                  exp1="HTML 5"
                  exp2="CSS"
                  exp3="JavaScript/jQuery"
                  exp4="JSP/Servlets"
                  exp5="JSF"
                  exp6="React"
                  exp7="XML/XSD/XSLT"
                  exp8="JUnit"
                  exp9="Maven"
                  exp10="Spring/MVC"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
      <div id="footer">
        <Footer />
      </div>
      <div className="stars">
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
        <div className="star"></div>
      </div>
    </div>
  );
};

export default Body;
