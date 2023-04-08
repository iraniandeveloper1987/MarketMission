import { useRef } from "react"
import Container from "./Container"
import officeImage from "../assets/images/office.png"
import FadeInWhenVisible from "./FadeInWhenVisible"

function HomeAboutUs() {
  const scrollRef = useRef(null)
  return (
    <section className="home__about-us pb-0">
      <Container>
        <div className="section-container home__about-us__container">
          <FadeInWhenVisible>
            <h2>
              The best
              <strong> Digital Marketing agency </strong>
              in Halifax NS
            </h2>
          </FadeInWhenVisible>
          <FadeInWhenVisible transitionDelay={0.1}>
            <p className="">
              Total 5 HTML pages are included in this template from TemplateMo website. Please check 2<a href="blog.html">blog</a>
              pages, <a href="project-detail.html">project</a>
              page, and <a href="contact.html">contact</a>
              page.
              <br />
              <br />
              You are <strong>allowed</strong>
              to use this template for commercial or non-commercial purpose. You are NOT allowed to redistribute the template ZIP file on template collection websites.
            </p>
          </FadeInWhenVisible>
          <FadeInWhenVisible transitionDelay={0.2}>
            <div className="home__about-us__container__about__image">
              <img src={officeImage} alt="office" />
            </div>
          </FadeInWhenVisible>
        </div>
      </Container>
    </section>
  )
}

export default HomeAboutUs
