import React from "react";
import PropTypes from "prop-types";
import "./FeatureCard.css";

const FeatureCard = ({ alt, icon, color, lineOne, lineTwo }) => {
  return (
    <div
      className={`col-12 col-sm-3 feature-card feature-${color} d-flex flex-column align-items-center my-4
    p-1`}
    >
      <img className="icon justify-content-center" src={icon} alt={alt} />
      <h2 className="feature-text text-wrap justify-content-center">
        <strong>{lineOne}</strong>
        <strong>{lineTwo}</strong>
      </h2>
    </div>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  lineOne: PropTypes.string.isRequired,
  lineTwo: PropTypes.string.isRequired,
};

export default FeatureCard;
