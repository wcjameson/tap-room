import React from "react";

function KegForm() {

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
  )
}

KegForm.PropTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default KegForm;