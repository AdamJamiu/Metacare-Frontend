import React from "react";
import "../assets/styles/chartBoxOne.css";
import { LineChart } from "./charts/chartOne";
import calendar from "../assets/images/calendar.svg";
import searchIcon from "../assets/images/searchIcon.svg";

export default function ChartBoxContainer() {
  return (
    <>
      <div>
        <Efficiency />
        <div className="chartWidget">
          <div className="chartSide">
            <ChartHeader />
            <LineChart />
          </div>

          <div className="timeCardWrap">
            <div className="timeCard">
              <p className="timeText">Average Response Time</p>
              <p className="timeMins">30 Mins</p>
            </div>
            <div className="timeCard">
              <p className="timeText">Responsive Time</p>
              <p className="timeMins">1 Hours 30 Mins</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Efficiency = () => {
  return (
    <>
      <div className="tabpanelHeader">
        <div className="tpanelRowOne">
          <p className="tpanelTitle">Efficiency Analytics</p>
        </div>

        <div className="tpanelRow">
          <div className="tpanelSearchWrapper">
            <input type="text" placeholder="Search" className="tpanelSearch" />
            <img
              src={searchIcon}
              alt="SaerchIcon"
              className="tpanelSearchIcon"
              width="20px"
            />
          </div>

          <div>
            <select name="Filter Options" className="selectOption">
              <option value="option 1">Filter Options</option>
              <option value="option 2">option 2</option>
              <option value="option 3">option 3</option>
            </select>
          </div>

          <div>
            <button className="tpanelBtn">Export</button>
          </div>
        </div>
      </div>
    </>
  );
};

const ChartHeader = () => {
  return (
    <div className="chartHeaderContainer">
      <div className="chartHeaderRow">
        <p className="tabXText">Replies per resolution</p>
        <span className="perc">+4.4%</span>
      </div>
      <div className="chartHeaderRow">
        <div className="highPrior">
          <span className="dot1"> </span>
          <p className="tabXSmallText">High Priority</p>
        </div>

        <div className="calendarWrap">
          <p className="calendarText">This Month</p>
          <img src={calendar} alt="CalenderIcon" />
        </div>
      </div>
    </div>
  );
};
