import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <h3>New Keg Form</h3>
      <form onSubmit={props.formSubmissionHandler}>
        {/* <label htmlFor="keg-form">Add a new keg</label> */}
        <input
          type="text"
          name="name"
          placeholder="Enter name of beverage" />
        <input
          type="text"
          name="price"
          placeholder="Enter price of keg" />
        <input
          type="text"
          name="flavor"
          placeholder="Enter flavor of beverage" />
        <button type='submit'>{props.buttonText}</button>
      </form>

    </React.Fragment>
  );
}

export default ReusableForm;