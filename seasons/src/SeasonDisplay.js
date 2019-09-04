import React from "react";

const seasonConfig = {
  summer: {
    text: "Let`s hit the beach.",
    icon: "sun"
  },
  winter: {
    text: "Burrr, its cold",
    icon: "snowflake"
  }
};
const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};
const SeasonDisplay = props => {
  let month = new Date().getMonth();
  let season = getSeason(props.lat, month);
  const { text, icon } = seasonConfig[season];
  return (
    <div>
      <i className={`massive ${icon} icon`} />
      <h1>{text}</h1>
      <i className={`massive ${icon} icon`}  />
    </div>
  );
};

export default SeasonDisplay;
