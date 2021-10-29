import './App.css';
import Previewer from './React Components/Previewer.js';
import Editor from './React Components/Editor.js';
import Toolbar from './React Components/Toolbar.js';
import React from 'react';
import marked from 'marked';
import 'font-awesome/css/font-awesome.min.css';


marked.setOptions({
  breaks: true,
});

const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
return `<a target="_blank" href="${href}">${text}</a>`;
};

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      markText: textPlaceholder,
      previewerMaximized: false,
      editorMaximized: false
    }
  };

  handleChange = (event) => {
    this.setState({
      markText: event.target.value
    });
  }

  handleEditorMaximized = () => {
    this.setState({
      editorMaximized: !this.state.editorMaximized
    });
  }

  handlePreviewerMaximized = () => {
    this.setState({
      previewerMaximized: !this.state.previewerMaximized
    });
  }

  render() {
    const toolbarIconClasses = this.state.editorMaximized || this.state.previewerMaximized ? "fa fa-compress" : "fa fa-arrows-alt";
    let editorClasses = "editorWrap";
    let previewerClasses = "previewerWrap";

    if (this.state.editorMaximized) {
      editorClasses = "editorWrap maximized";
      previewerClasses = "previewerWrap hide";
    } else if (this.state.previewerMaximized) {
      editorClasses = "editorWrap hide";
      previewerClasses = "previewerWrap maximized";
    }

    return (
      <div className="App">
        <header className="App-header">
          <p>Markdown Previewer</p>
        </header>
        <div className={editorClasses}>
          <Toolbar title="Editor" icon={toolbarIconClasses} onClick={this.handleEditorMaximized} />
          <Editor onChange={this.handleChange} markText={this.state.markText}/>
        </div>
        <div className={previewerClasses}>
          <Toolbar title="Previewer" icon={toolbarIconClasses} onClick={this.handlePreviewerMaximized} />
          <Previewer showText={marked(this.state.markText, { renderer: renderer })}/>
        </div>
      </div>
    );
  }
};

const textPlaceholder = `# Welcome to markdown previewer
Hello!

## This is a sub heading element (H2 size) 

[This is a link to Google main page](http://google.com)

For inline code it is like this: \`<div></div>\`

a code block follows: 
\`\`\`
  //this is multiline code
  //here you write your code to show off
\`\`\`

a list item using hyphen ( - ):
- This is a list
- second element of the list
  - inedentation level list
    - more indentation

### a blockquote:
> With quote here!

there are **bolded text like this**.

 ### An image: 
 ![Image Yoda babby](https://miro.medium.com/max/1400/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg)`;

export default App;
