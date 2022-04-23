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
    const newMainKegList = [...this.state.mainKegList];
    const index = newMainKegList.findIndex(keg => keg.id === id);
    newMainKegList[index]["pints"] -= 1;
    if(newMainKegList[index]["pints"] === 0 || isNaN(newMainKegList[index]["pints"]) ){
      newMainKegList[index]["pints"] = "Sold Out";
    }
    if (index !== -1) {
      this.setState({mainKegList: [...newMainKegList]});
    }
  }

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

      </React.Fragment >
    )
  }
}

export default KegControl;