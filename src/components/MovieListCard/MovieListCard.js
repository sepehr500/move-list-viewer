import React from "react";
import PropTypes from "prop-types";
import Rater from "react-rater";

const MovieListCard = ({
  title,
  thumbnailPath,
  releaseDate,
  score,
  onClick
}) => (
  <article className="shadow-1 b--black-40 bg-white mr3 br3 mv3 ba bw1">
    <div className="dib center">
      <img alt={`${title} poster`} src={thumbnailPath} />
    </div>
    <div style={{ height: "4rem" }} className="tc">
      <div className="pt3 ph2" style={{ maxWidth: "200px" }}>
        <h1 className="f5">{title}</h1>
      </div>
    </div>
    <div className="ph2 mv2">
      <div className="mb1">
        <p>Release date: {releaseDate}</p>
      </div>
    </div>
    <div style={{ fontSize: "40px" }} className="ph2 center f1">
      <Rater interactive={false} total={5} rating={score} />
    </div>
    <button
      onClick={onClick}
      className="pb3 f3 w-100 br--bottom br2 Details-button"
      value="details"
    >
      details
    </button>
  </article>
);

MovieListCard.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnailPath: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export { MovieListCard };
