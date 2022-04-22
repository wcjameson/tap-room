import React from "react";
import PropTypes from "prop-types";

function KegDetails(props) {
  const { keg, onPouringPint } = props;


    // if(keg.pints === 0) {
    //   return "Out of Stock";
    // } else if(keg.pints > 0) {
    //   return keg.pints -1
    // }

  

  return(
    <React.Fragment>
      <h1>Keg Details</h1>
      <h3>{keg.name}</h3>
      <p>
      {keg.price} 
      {keg.flavor}
      {keg.pints}
      </p>
      <button onClick={() => onPouringPint(keg.id)}>Pour Pint</button>


    </React.Fragment>
  )
}

KegDetails.propTypes = {
  keg: PropTypes.object,
  onPouringPint: PropTypes.func
}

export default KegDetails;