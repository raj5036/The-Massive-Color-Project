import Palette from './Palette';
import React from 'react';
import seedColors from './seedColors';

class App extends React.Component {
  render(){
    return(
      <>
        <h1>React Colors App</h1>
        <Palette palette={seedColors[4]}/>
      </>
    );
  }
}

export default App;
