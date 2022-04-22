import React from "react";
import PropTypes from "prop-types";

function Keg(props) {

  return (
    <React.Fragment>
      <div onClick = {() => props.whenKegClicked(props.id)}>
        <h3>{props.name}</h3>
        <p>{props.price}</p>
        <p>{props.flavor}</p>
        <p>{props.pints}</p>
        <hr />
      </div>
    </React.Fragment>
  )
}

Keg.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  flavor: PropTypes.string,
  pints: PropTypes.number,
  id: PropTypes.string,
  whenKegClicked: PropTypes.func
};

export default Keg;