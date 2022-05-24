/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";

const WorksThreeColumnWithFilter = ({ filterPosition }) => {
  const [pageLoaded, setPageLoaded] = React.useState(false);
  React.useEffect(() => {
    setPageLoaded(true);
    if (pageLoaded) {
      setTimeout(() => {
        initIsotope();
      }, 1000);
    }
  }, [pageLoaded]);
  return (
    <section className="portfolio section-padding pb-70">
      <div className="container">
        <div className="row">
          <div className={`filtering ${filterPosition === "center" ? "text-center" : filterPosition === "left" ? "text-left" : "text-right"} smplx col-12`}>
            <div className="filter">
              <span data-filter="*" className="active">
                All
              </span>
              <span data-filter=".brand">Branding</span>
              <span data-filter=".web">Mobile App</span>
              <span data-filter=".graphic">Creative</span>
            </div>
          </div>

          <div className="gallery full-width">
            <div className="col-lg-4 col-md-6 items web lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/portfolio/mas/ojeksayur.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Ojek Sayur</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">Mobile Apps</a>, <a href="#0">UI/UX Design</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/portfolio/mas/gundala.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Gundala Fan Art</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">Vector Art</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand lg-mr">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/portfolio/mas/instagramfeed.png" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>ASEAN YOUTH Instagram Feeds</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">Social Media</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items brand">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/portfolio/mas/06.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Blast From The Past</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items web">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/portfolio/mas/05.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>See It Yourself</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 items graphic">
              <div className="item-img wow fadeInUp" data-wow-delay=".4s">
                <Link href="/project-details/project-details-dark">
                  <a>
                    <img src="/img/portfolio/mas/04.jpg" alt="image" />
                  </a>
                </Link>
              </div>
              <div className="cont">
                <h6>Energies of Love</h6>
                <span>
                  <a href="#0">Design</a>, <a href="#0">WordPress</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksThreeColumnWithFilter;
