import { React, useState } from "react";
import "../styles/eventcard.css";
import "../styles/card.css";

import axios from "axios";

const PhoneInfoga = (props) => {
  const [disabled, setdisable] = useState(false);
  const [starloading, setStarloading] = useState(false);
  const [starred, setIsstarred] = useState(props.starred);
  const handlestarred = (e, state) => {
    setdisable(true);
    setStarloading(true);
    const datatobesent = {
      postid: props.ID,
    };
    if (state) {
      axios
        .get(
          `http://${address.ip}:4444/starred/events/tounstar`,
          datatobesent,
          {
            withCredentials: true,
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
              "Access-Control-Allow-Credentials": true,
            },
          }
        )
        .then((res) => {
          if (res.data !== "notloggedin") {
            Auth.login();
            console.log(res.data);
            setIsstarred(!state);
            e.target.style.color = "red";
            setdisable(false);
            setStarloading(false);
          }
        });
    } else {
      //   console.log("unnnnnnnnstar");
      axios
        .post(`http://${address.ip}:4444/starred/events/tostar`, datatobesent, {
          withCredentials: true,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Credentials": true,
          },
        })
        .then((res) => {
          if (res.data !== "notloggedin") {
            Auth.login();
            console.log(res.data);
            setIsstarred(!state);
            e.target.style.color = "gold";
            setdisable(false);
            setStarloading(false);
          }
        });
    }
  };
  const newpage = () => {
    let text_field = props.title;
    let date = props.fromdate.replaceAll("-", "");
    date = date.replaceAll(":", "");
    date = date.replaceAll(".", "");
    // date = date + "/" + date;
    let date1 = props.todate.replaceAll("-", "");
    date1 = date1.replaceAll(":", "");
    date1 = date1.replaceAll(".", "");
    // date1 = date1 + "/" + date1;
    console.log(date, date1);
    let url = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(
      text_field
    )}&dates=${encodeURIComponent(date)}/${encodeURIComponent(
      date1
    )}&location=${encodeURIComponent(props.venue)}`;
    window.open(url);
  };

  return (<div><p>hi</p></div>);
};

export default PhoneInfoga;
