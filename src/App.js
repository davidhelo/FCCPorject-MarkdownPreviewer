import './App.css';
import Editor from './React Components/Editor.js';
import Previewer from './React Components/Previewer.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Markdown Previewer</p>
      </header>
      <p>here renders <code>editor</code></p>
      <Editor />
      <p>here renders <code>Previewer</code></p>
      <Previewer />
    </div>
  );
}

export default App;
