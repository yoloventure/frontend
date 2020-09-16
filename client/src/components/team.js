import React from "react";
import "../about/about.css";
import AboutImage from "./aboutImage";
import yawo from "../photos/yawo.png";
import shelley from "../photos/shelley.png";
import andrew from "../photos/andrew.png";
import kaixin from "../photos/kaixin.jpg";
import abdoul from "../photos/abdoul.png";
import maxim from "../photos/maxim.jpeg";
import vanishka from "../photos/vanishka.JPG";

class Team extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageDescription: "Click to a picture to learn about the person",
      position: "",
      name: "Hello There"
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(event, name, position, description) {
    this.setState({
      name: name
    });
    this.setState({
      position: position
    });
    this.setState({
      imageDescription: description
    });
  }
  render() {
    return (
      <div className="container">
        {/*Row  1 */}
        <div className="row justify-content-center">
          <div
            onClick={event =>
              this.onClick(
                event,
                "Shelley Chen",
                "CEO",
                `Last Summer, she interned for a Malaysian-based Venture Capital firm “TH Capital” where she helped four entrepreneurs in Southeast Asia grow their business and streamline operations. She participated in deal-sourcing, drafted finance processes and performed due diligence. During her internship, she helped a fast-growing Fintech startup "Money Match" develop a search engine optimization (SEO) strategy for the company and implement the SEO strategy in optimizing content for the company's social media channels, websites, and blogs. She also worked with our portfolio Fintech startup Versa to optimize their business strategy and develop a five-year go-to-market plan. These experiences make her a critical thinker and self-starter.
                `
              )
            }
          >
            <AboutImage path={shelley} />
          </div>
        </div>
        {/*Row  2 */}
        <div className="row d-flex justify-content-around ">
          <div
            onClick={event =>
              this.onClick(
                event,
                "Yawo Siatitse",
                "CTO",
                `In my sophomore year, I was a Summer Technology Analyst at Morgan Stanley. I worked as a full-stack developer and added features on one of their financial reporting applications. While interning there I developed a strong for security after talking to some security professionals. In the past summer, I interned at Microsoft Cloud and AI Security team to explore the domain. Needless to say, I fell in love with both the domain and the company so I will be returning this summer.`
              )
            }
          >
            <AboutImage path={yawo} />
          </div>

          <div
            onClick={event =>
              this.onClick(
                event,
                "Kaixin Li",
                "UX/UI designer",
                `Kaixin has interned with a couple of tech companies as UXer and dived into multimodal interaction and crossmodal integration in research centers, making strides in decoding nuanced human cognition and building it into design and emerging technologies to give everyone a stake in shaping the future of their lives.
                `
              )
            }
          >
            <AboutImage path={kaixin} />
          </div>
        </div>
        {/*Row  3*/}

        <div className="row d-flex flex-nowrap flex-row justify-content-around">
          <div className="col">
            <div
              onClick={event =>
                this.onClick(
                  event,
                  "Abdul Moid Munawar",
                  "Full Stack Developer",
                  `The product we are building has the potential to help many people discover new passions by making it easier for people to explore completely new careers in different places and cultures. He realized that not only would joining YoloShadow push him to grow as a developer, but would also give him the chance to touch some people’s lives in a positive way. He has served as a Teaching Assistant for Data Structures, as well as Intermediate Microeconomics in the past. Currently he is a Workshop Leader for Introduction to Programming, and also a CETL Peer Tutor for various courses.`
                )
              }
            >
              <AboutImage path={abdoul} />
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col">
              <div className="ellipse  d-flex flex-wrap align-items-center">
                <div className="d-flex flex-column flex-wrap">
                  <h3 className="shell">{this.state.name}</h3>
                  <p className="ceo">{this.state.position}</p>
                  <p className="paragraph d-flex flex-row flex-wrap">
                    {this.state.imageDescription}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div
              className="col"
              onClick={event =>
                this.onClick(
                  event,
                  "Vanshika Singhania",
                  "Finance and Marketing Manager",
                  `She is Co-President of a Bollywood dance group. She has always wanted to have a startup of her own someday and wanted to get the experience of working for one before starting her own. She always takes on a project only when she is passionate about something and joined Yolo Shadow as she loves the concept and thinks it has a lot of potential to make a difference. Last summer, she worked at Deloitte in Kolkata, India as a Risk Advisory Intern in the Internal Audit Department. This experience provided her with a lot of exposure in the finance industry.`
                )
              }
            >
              <AboutImage path={vanishka} />
            </div>
          </div>
        </div>

        {/*Row  4*/}
        <div className="row justify-content-around">
          <div
            onClick={event =>
              this.onClick(
                event,
                "Andrew Thankson",
                "Full Stack Developer",
                `is someone who is all about personal growth: both his and that of others. For him, Yolo Shadow created a great opportunity for him to hone his frontend skills. He joined because he loved the vision of the company and also saw an opportunity to work on something that’s going to be really great. Last summer, he worked as a front-end developer intern. He’s currently working as a full stack software engineering intern at Promazo, a software product Sprint intern at Google and will be joining IHS Markit as a software engineering intern over the summer. `
              )
            }
          >
            <AboutImage path={andrew} />
          </div>

          <div
            onClick={event =>
              this.onClick(
                event,
                "Maxim Gorshkov",
                "Full Stack Developer",
                ` Traveling is one of his greatest passions in life, so it is no wonder that he fell in love with YoloShadow’s mission. Working at YoloShadow is not only helping him grow as a software engineer, but also gives him the opportunity to contribute to a product that will change people’s lives for the better. He loves learning from the wonderful, experienced team which is an added bonus for him!
                He was a teaching assistant for Data Structures and Algorithms, and participated in a few Full Stack Development apprenticeships. He is a big fan of the Japanese culture and is currently trying to learn the language, and loves to listen to classic rock!`
              )
            }
          >
            <AboutImage path={maxim} />
          </div>
        </div>
        {/*Row  5*/}
        {/*
        <div className="row justify-content-center">

          <div
            onClick={event =>
              this.onClick(
                event,
                "Yawo Siatitse",
                "CTO",
                `"Software Engineer at Microsoft"`
              )
            }
          >
            <AboutImage path={yawo} />
          </div>
        </div>
        */}
      </div>
    );
  }
}

export default Team;
