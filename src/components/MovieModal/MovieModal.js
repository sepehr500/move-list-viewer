import React from "react";
import PropTypes from "prop-types";
import Modal from "react-modal";
import Rater from "react-rater";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieModal = ({
  title,
  thumbnailPath,
  releaseDate,
  overview,
  score,
  onClose,
  onFavorite,
  isFavorite
}) => {
  return (
    <Modal
      isOpen={true}
      ariaHideApp={false}
      overlayClassName="Overlay"
      className="Modal"
      contentLabel={`${title} details`}
    >
      <img
        className="center"
        style={{ borderRadius: "2%" }}
        alt={`${title} poster`}
        src={thumbnailPath}
      />
      <div className="pa3 mw6">
        <div className="tc f3 mb3">
          <h1 className="f2">{title}</h1>
        </div>
        <button
          data-testid="star-button"
          aria-label={isFavorite ? "Click to unfavorite" : "Click to favorite"}
          onClick={onFavorite}
          className="star-button dim"
        >
          <FontAwesomeIcon
            data-testid="star"
            icon={faStar}
            size="3x"
            className={`${isFavorite ? "gold" : "gray"} mb3 Slow-transition`}
          />
        </button>
        <div>
          <p>Release date: {releaseDate}</p>
        </div>
        <div className="f1 pb1">
          <Rater interactive={false} total={5} rating={score} />
        </div>
        <div className="mb3">
          <p>{overview}</p>
        </div>
        <div>
          <button
            data-testid="closeButton"
            onClick={onClose}
            className="shadow-1 pb3 f3 w-100 br3 Details-button"
          >
            close
          </button>
        </div>
      </div>
    </Modal>
  );
};

MovieModal.propTypes = {
  title: PropTypes.string.isRequired,
  thumbnailPath: PropTypes.string.isRequired,
  releaseDate: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  onClose: PropTypes.func.isRequired,
  onFavorite: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired
};

export { MovieModal };
