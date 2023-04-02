import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";

import "bootstrap/dist/css/bootstrap.css";

export default function WeatherInfo(props) {
  return (
    <div>
      <div>
        <div className="top">
          <div className="row">
            <div className="col-3"></div>

            <div className="col-6 text-center">
              <ul>
                <li>
                  <span className="location-city">{props.data.city}</span>
                  <div className="country">{props.data.country}</div>
                </li>
                <li>
                  <WeatherTemperature celsius={props.data.temperature} />
                </li>
                <li>
                  <span>
                    <WeatherIcon code={props.data.icon} size={60} />
                  </span>
                </li>
                <li></li>
              </ul>
            </div>
            <div className="col-3"></div>
          </div>
        </div>

        <div className="mid-01">
          <div className="row">
            <div className="col-6">
              <ul>
                <li className="whetherStatus">{props.data.description}</li>
                <li className="humidity">
                  <span className="humtitle">Humidity :</span>
                  <span className="humpercent">{props.data.humidity}</span>
                  <span>%</span>
                </li>
                <li className="wind">
                  <spna className="windtitle">Wind : </spna>
                  <span className="windnumb"> {props.data.wind} </span>
                  <span> Km/h </span>
                </li>
              </ul>
            </div>

            <div className="col-6 text-center">
              <ul>
                <li>
                  <span className="time">
                    <FormattedDate date={props.data.date} />
                  </span>
                </li>
                <li></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
