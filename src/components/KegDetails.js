import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {
  const { keg, onPouringPint } = props;

  return (
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name}</h3>
      <p>Cost: {keg.price}</p>
      <p>Flavor: {keg.flavor}</p>
      <p>Pints remaining: {keg.pints}</p>
      <button onClick={() => onPouringPint(keg.id)}>Pour Pint</button>


    </React.Fragment>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onPouringPint: PropTypes.func
}

export default KegDetails;