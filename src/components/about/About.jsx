import "./about.css";
import SelfImg from "../../img/CapandGown_Pexels_byStanleyMorales.jpg";
import UF from "../../img/Uf.jpg";
import FIU from "../../img/FIU_Engineering_and_Computing.jpg";
import ESAT from "../../img/esat_valencia.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={SelfImg} alt="" className="a-image" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-subtitle">
          Unlocking Success: Experienced Product Manager Driving Innovation,
          User-Centric Solutions, and Exceptional Results.
        </p>
        <p className="a-description">
          As an accomplished product manager, I bring a wealth of experience and
          a proven track record of success to the table. With expertise in
          creating customer personas, I possess a deep understanding of user
          needs and excel at crafting software features that resonate with
          target audiences. My strong leadership skills, data-driven approach,
          and proficiency in agile methodologies enable me to effectively manage
          cross-functional teams and deliver impactful solutions. Additionally,
          my ability to create comprehensive product roadmaps and ensure
          rigorous quality assurance testing sets the stage for successful
          product launches. By leveraging my skills and experience, I can
          contribute to driving innovation and delivering exceptional results in
          a tech company.
        </p>
        <div className="a-university">
          <img src={UF} alt="" className="a-university-img" />
          <div className="a-university-texts">
            <h4 className="a-university-title">
              University of Florida Graduate
            </h4>
            <p className="a-university-desc">
              Mastering the Art of Advertising: Proud Gator and Bachelor of
              Science in Advertising Graduate.
            </p>
          </div>
        </div>
        <div className="a-university">
          <img src={FIU} alt="" className="a-university-img" />
          <div className="a-university-texts">
            <h4 className="a-university-title">
              Florida International University Graduate
            </h4>
            <p className="a-university-desc">
              Engineered for Success: Accomplished Systems Improvement
              Engineering Graduate from Florida International University.
            </p>
          </div>
        </div>
        <div className="a-university">
          <img src={ESAT} alt="" className="a-university-img" />
          <div className="a-university-texts">
            <h4 className="a-university-title">
              ESAT - Escuela Superior de Arte y Tecnología Graduate
            </h4>
            <p className="a-university-desc">
              UI/UX Design, Digital Marketing, and Front-End Web Development
              Master's Graduate from ESAT Postgraduate Program.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
