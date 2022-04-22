import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {
  const { keg } = props;

  return(
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name}</h3>
      <p>
      {keg.price} 
      {keg.flavor}
      </p>


    </React.Fragment>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object
}

export default KegDetails;