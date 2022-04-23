import React from "react";

function Header() {

  return(
    <React.Fragment>
      <div className="card-header">
      <h1 className="display-6">The Tap Room on Alpha-Centauri-4</h1>
      <p id="welcome" className="text-lead">Welcome to your very own space beverage management tool.</p>  
      <p id="welcome1">Keep track of your space kegs and how many space pints have been consumed!</p>
      </div>
    </React.Fragment>
  )
}

export default Header;