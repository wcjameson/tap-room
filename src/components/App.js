import React from "react";
import Header from "./Header";
import KegControl from "./KegControl";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <React.Fragment>
      <div className="container">
        <Header /> <hr/>
        <KegControl />
      </div>
    </React.Fragment>
  )
}

export default App;