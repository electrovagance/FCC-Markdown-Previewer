import React, { Component } from 'react';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <h1> Build a Markdown Previewer</h1>
        <section id="main-app-area">
          <textarea rows="50" id="editor">
            <p># This is a header</p>
          </textarea>
          <div id="preview">
          </div>
        </section>
      </div>
    )
  }
}

export default App;
