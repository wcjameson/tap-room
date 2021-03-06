import React from "react";
import Keg from "./Keg";
import PropTypes from "prop-types";

function KegList(props) {

  return (
    <React.Fragment>

      {props.kegList.map((keg) =>
        <Keg
        whenKegClicked={props.onKegSelection}
        name={keg.name}
        price={keg.price}
        flavor={keg.flavor}
        pints={keg.pints}
        key={keg.id}
        id={keg.id} />
      )}

    </React.Fragment>
  );
}

KegList.propTypes = {
  kegList: PropTypes.array,
  onKegSelection: PropTypes.func
}

export default KegList;