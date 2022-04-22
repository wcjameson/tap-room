import React from "react";
import NewKegForm from "./NewKegForm";
import KegDetails from "./KegDetails";
import KegList from "./KegList";


class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainKegList: [],
      selectedKeg: null,
      // pints: 12
    };
  }

  handleAddingNewKegToList = (newKeg) => {
    const newMainKegList = this.state.mainKegList.concat(newKeg);
    this.setState({
      mainKegList: newMainKegList,
      formVisibleOnPage: false
    });
  }

  handleChangingSelectedKeg = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    this.setState({ selectedKeg: selectedKeg });
  }

  handleClick = () => {
    if (this.state.selectedKeg != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedKeg: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage
      }));
    }
  }

  handlePouringPint = (id) => {
    const selectedKeg = this.state.mainKegList.filter(keg => keg.id === id)[0];
    console.log(selectedKeg);
    this.setState({ pints: selectedKeg.pints - 1}); //not sure why this doesn't change the state of pints
    console.log(this.state.selectedKeg.pints - 1);
  }

  // handlePouringPint = () => {
  //   const pintsValue = selectedKeg.pints;
  //   console.log(pintsValue);
  //   if (pintsValue === 0) {
  //     console.log("out of stock");
  //     return "Out of Stock";
  //   } else if (pintsValue > 0) {
  //     this.setState({pints: pintsValue - 1});
  //     return pintsValue;
  //   }

  // }
  
  // handlePouringPint = () => {
  //   this.setState({pints:  - 1});
  //   console.log(this.state);
  // }
  // if (pintsValue === 0) {
  //   return "Out of Stock";
  // } else if (pintsValue > 0) {
  //   return pintsValue - 1
  // }
  // onPouringPint={this.handlePouringPint}

  render() {
    let currentlyVisibleState = null;
    let buttonText = null;

    if (this.state.selectedKeg != null) {
      currentlyVisibleState = <KegDetails keg={this.state.selectedKeg} onPouringPint={this.handlePouringPint} />
      buttonText = "Return to Keg List";
    } else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewKegForm onNewKegCreation={this.handleAddingNewKegToList} />
      buttonText = "Return to Keg List";
    } else {
      currentlyVisibleState = <KegList kegList={this.state.mainKegList} onKegSelection={this.handleChangingSelectedKeg} />
      buttonText = "Add Keg";
    }

    return (
      <React.Fragment>
        {currentlyVisibleState}
        <button onClick={this.handleClick} > {buttonText}</button >
        {/* <NewKegForm />
        <KegList />
        <KegDetails /> */}

      </React.Fragment >
    )
  }
}

export default KegControl;