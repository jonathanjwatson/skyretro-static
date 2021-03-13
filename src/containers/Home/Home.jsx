import React from "react";
import architect from "../../assets/icons/architect.png";
import free from "../../assets/icons/free.png";
import productive from "../../assets/icons/productive.png";
import tool from "../../assets/icons/tool.png";
import unlimited from "../../assets/icons/unlimited.png";
import whiteboard from "../../assets/icons/whiteboard.png";
import FeatureCard from "../../components/FeatureCard/FeatureCard";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="home-header">
        <div className="container">
          <div className="row description-box">
            <div className="col">
              <h1 className="center font-weight-bold">
                Simple, Free Agile Project Management
              </h1>
            </div>
          </div>
        </div>
      </div>
      "
      <div className="container">
        <div className="row center">
          <div className="col">
            <h3
              className="center font-weight-light mt-3"
              style={{ color: "#ad3232" }}
            >
              After due consideration, we have made the difficult choice to
              close down Sky Retro.
              <br />
              Thank you all for your patronage and support.
            </h3>
          </div>
        </div>
        <div className="row center d-flex align-items-center justify-content-around mt-4">
          <FeatureCard
            alt="lock"
            icon={free}
            color="green"
            lineOne="Completely Free,"
            lineTwo="No Hidden Fees"
          />
          <FeatureCard
            alt="whiteboard"
            icon={whiteboard}
            color="orange"
            lineOne="Digital"
            lineTwo="Whiteboard"
          />
          <FeatureCard
            alt="unlimited"
            icon={unlimited}
            color="purple"
            lineOne="Unlimited, Simple"
            lineTwo="To Use Boards"
          />
        </div>
        <div className="row center d-flex align-items-center justify-content-around mb-4">
          <FeatureCard
            alt="productive"
            icon={productive}
            color="dk-blue"
            lineOne="Be More"
            lineTwo="Productive"
          />
          <FeatureCard
            alt="architect"
            icon={architect}
            color="lt-grey"
            lineOne="Built by Engineers"
            lineTwo="for Engineers"
          />
          <FeatureCard
            alt="tool"
            icon={tool}
            color="lt-blue"
            lineOne="The Right Tool For"
            lineTwo="Your Retro"
          />
        </div>
      </div>
      <div className="home-main p-3">
        <div className="container">
          <div className="row d-flex justify-content-start my-2">
            <div className="col-8">
              <h1 className="font-weight-bold text-left">
                Why is SkyRetro better?
              </h1>
              <div className="dark-gray-p">
                <p className="font-italic mb-0">
                  Sky Retro is built to help you focus on helping your team
                  improve. We aren’t as fancy as some retro apps. But even
                  without those “gee-whiz” buttons and menus, we provide a
                  consistent, clean interface that you can use week in and week
                  out. We are constantly taking feedback from users like you so
                  we have a tool that is simplistic , usable and meets{" "}
                  <strong>your</strong> real needs.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-end my-4">
            <div className="col-8">
              <h1 className="font-weight-bold text-left">
                Built by Engineers for Engineers…
              </h1>
              <div className="dark-gray-p">
                <p className="font-italic mb-0">
                  When we lost access to our Whiteboard, and sticky note method,
                  our retrospectives went out the window. We tried to find a
                  solution but every service costs, has a limited number of
                  boards, or is like trying to hammer a screw… The fully digital
                  world we find ourselves in doesn’t allow for the old method of
                  agile retrospectives. The simplicity of white boards and
                  sticky notes is a way of the past, and finding an answer to
                  these problems was our inspiration for creating SkyRetro.
                </p>
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-start my-2">
            <div className="col-8">
              <h1 className="font-weight-bold text-left">
                Why Retrospectives?
              </h1>
              <div className="dark-gray-p">
                <p className="font-italic mb-0">
                  Being efficient, minimizing waste and hitting goals as
                  developers and project managers has NEVER been more important
                  OR more challenging than it is today. Retrospectives allow us
                  to come together as a team, review what went well, what we
                  need to improve, and how we will do better next time. They can
                  be a little daunting at first, but can rapidly improve
                  productivity, increase your output, drive higher quality and
                  inspire improvement in your team.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
