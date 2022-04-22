import React from "react";
import PropTypes from "prop-types";

function Keg(props) {

  return(
    <React.Fragment>
      <h3>{props.name}</h3>
      <p>{props.price}</p>
      <p>{props.flavor}</p>
      <hr/>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string
};

export default Keg;