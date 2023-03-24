import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherInfo.css";
import FormattedDate from "./FormattedDate";

export default function WeatherInfo(props) {
  return (
    <div>
      <div>
        <div className="top">
          <div className="row">
            <div className="col-3">
              <span className="btn-group" role="group">
                <input type="radio" className="btn-check" />
                <label className="btn btn-outline-primary" for="btnradio1">
                  C
                </label>

                <input type="radio" className="btn-check" name="btnradio" />
                <label className="btn btn-outline-primary" for="btnradio3">
                  F
                </label>
              </span>
            </div>

            <div className="col-6 text-center">
              <ul>
                <li>
                  <span className="location-city">{props.data.city}</span>
                  <div className="country">{props.data.country}</div>
                </li>
                <li>
                  <span>
                    <WeatherIcon code={props.data.icon} />
                  </span>
                </li>
                <li>
                  <div className="degree-top"></div>
                </li>
              </ul>
            </div>
            <div className="col-3">
              <button type="button" className="btn btn-outline-success">
                📍
              </button>
            </div>
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
                <li>
                  <span className="date">{}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="forcast"></div>
      </div>
    </div>
  );
}
