import React from "react";
import Rating from "react-rating";
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
    <div className="ph2 mv2">
      <Rating initialRating={score} readonly fractions={2} />
    </div>
    <button
      onClick={onClick}
      className="pb3 bg-light-blue black f3 w-100 br3 Details-button"
      value="details"
    >
      details
    </button>
  </div>
);

export { MovieListCard };
