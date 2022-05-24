import React from "react";
import heroSkillsProgress from "../../common/heroSkillsProgress";

const AboutWithSkills = () => {
  React.useEffect(() => {
    heroSkillsProgress();
  }, []);
  return (
    <div className="hero-sec section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <div className="sub-title">
                <h6>About Me</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="main-title wow" data-splitting>
                My mission is to design dan develop great applications that are useful for all.
              </h3>
              <p className="wow fadeInUp" data-wow-delay=".5s">
                Hello! I’m Muhammad Aulia Alfani. UI/UX designer from Indonesia, Jawa Barat. Passionate in UI/UX design and Front-end web development with high interests in product design, design thinking, social media, digital marketing,
                and communication. These interests bring me to be an adaptable, creative, and initiative person who pays attention to detail. Love to learn new things, have a high curiosity, and meet new people from different backgrounds.
              </p>
              <a href="#0" className="simple-btn mt-40">
                Download C.V
              </a>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="skills-box full-width">
              <div className="skill-item">
                <h6 className="custom-font">UI / UX Design</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="80%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Front-End Web Development</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="70%"></div>
                </div>
              </div>
              <div className="skill-item">
                <h6 className="custom-font">Graphic Design</h6>
                <div className="skill-progress">
                  <div className="progres custom-font" data-value="80%"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutWithSkills;
