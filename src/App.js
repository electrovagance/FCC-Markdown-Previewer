import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

const displayAtStart = `# This is an <h1> tag

## This is an <h2> tag

This is a [link] (https://www.npmjs.com/package/react-marked) 

* Item 1
* Item 2
  * Item 2a
  * Item 2b
  * Item 2c
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: displayAtStart
    }
  }

  componentDidMount = () => {
    const parser = new DOMParser();
    let convertedMarkdown = marked(this.state.textarea);
    let doc = parser.parseFromString(convertedMarkdown, "text/html");
    doc = doc.activeElement.innerHTML;

    let preview = document.getElementById('preview');
    preview.insertAdjacentHTML("afterbegin", doc)
  }

  render() {

    
    // 
    // console.log(doc.activeElement.innerHTML)
    
    return (
      <div>
        <h1> Build a Markdown Previewer</h1>
        <section id="main-app-area">
          <textarea rows="50" id="editor" defaultValue={this.state.textarea}>
          </textarea>
          <div id="preview">
          </div>
        </section>
      </div>
    )
  }
}

export default App;
