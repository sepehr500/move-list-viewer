import React from "react";
import Modal from "react-modal";
import Rating from "react-rating";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

if (process.env.NODE_ENV !== "test") {
  Modal.setAppElement("#root");
}

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
      contentLabel="Example Modal"
    >
      <div className="flex-grow-1 center">
        <img alt={`${title} poster`} src={thumbnailPath} />
      </div>
      <div className="flex flex-column pa3 flex-grow-0 mw6">
        <div className="tc f3 mb3">
          <div>{title}</div>
        </div>
        <FontAwesomeIcon
          data-testid="star"
          icon={faStar}
          size="3x"
          className={`${isFavorite ? "gold" : "gray"} mb3`}
        />
        <div>
          <div className="mb3">Release date: {releaseDate}</div>
        </div>
        <Rating className="mb3" initialRating={score} readonly fractions={2} />
        <div className="mb3">
          <div>{overview}</div>
        </div>
        <div>
          <button
            onClick={onFavorite}
            className={`shadow-1 pb3 mb3 bg-light-blue black f3 w-100 br3 Details-button`}
          >
            {isFavorite ? "Unfavorite" : "Add to favorites"}
          </button>
          <button
            data-testid="closeButton"
            onClick={onClose}
            className="shadow-1 pb3 bg-light-blue black f3 w-100 br3 Details-button"
          >
            close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export { MovieModal };
