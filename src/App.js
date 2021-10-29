import './App.css';
import Previewer from './React Components/Previewer.js';
import Editor from './React Components/Editor.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markText: ""
    }
  };

  handleChange = (event) => {
    console.log("event.target.value is: ", event.target.value);
    this.setState({
      markText: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Markdown Previewer</p>
        </header>
        <p>here renders <code>editor</code></p>
        <Editor onChange={this.handleChange} markText={this.state.markText}/>
        <Previewer showText={this.state.markText}/>
      </div>
    );
  }
};

export default App;
