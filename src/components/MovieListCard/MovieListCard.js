import React from "react";
import Rater from "react-rater";
// TODO add prop types

const MovieListCard = ({
  title,
  thumbnailPath,
  releaseDate,
  score,
  onClick
}) => (
  <div className="bg-white mr3 flex flex-column br3 mv3 ba bw1 dark-gray b--black">
    <div className="dib center">
      <img alt={`${title} poster`} src={thumbnailPath} />
    </div>
    <div style={{ height: "4rem" }} className="tc">
      <div className="pt3 ph2" style={{ maxWidth: "200px" }}>
        <b>{title}</b>
      </div>
    </div>
    <div className="ph2 mv2">
      <div className="mb1">Release date: {releaseDate}</div>
    </div>
    <div style={{ fontSize: "40px" }} className="f1">
      <Rater interactive={false} total={5} rating={score} />
    </div>
    <button
      onClick={onClick}
      className="pb3 f3 w-100 br3 Details-button"
      value="details"
    >
      details
    </button>
  </div>
);

export { MovieListCard };
