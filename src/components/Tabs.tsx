import { useState } from "react";
import "../assets/styles/tabs.css";
import ChartBoxContainer from "./chartBox";

function TabsComponent() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="mainContent">
      <div className="tabListContainer">
        <div className="block-tabs">
          <div
            className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(1)}
          >
            Efficiency
          </div>
          <div
            className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(2)}
          >
            Volume
          </div>
          <div
            className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(3)}
          >
            Customer Satifaction
          </div>
          <div
            className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
            onClick={() => toggleTab(4)}
          >
            Backlog
          </div>
        </div>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="tabContent">
            <ChartBoxContainer />
          </div>
        </div>

        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <div className="tabContent">
            <p>
              Volume
            </p>
          </div>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
          <h2>Back Log</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}

export default TabsComponent;
