import React, { Component } from 'react';
import './App.css';
import Editor from './components/Editor';
import Preview from './components/Preview';

const displayAtStart = `# This is an H1 tag
____
## This is an H2 tag, or a sub header!
____
This is a link to [GitHub](http://github.com)!
____
* This is an unordered list
  * Item 1a
  * Item 1b
  * Item 1c
____
Let's insert a picture! ![My Profile Picture](https://avatars2.githubusercontent.com/u/7756403?v=4)
____
And a quote from **Leonardo da Vinci**:
>“Simplicity is the ultimate sophistication.”
____

Some \`<span><div></div></span>\` div~! 
___

Now let us add some code!
\`\`\`
    if (isAwesome){
      return true
    }
\`\`\`
____

`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: displayAtStart,
    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ textarea: event.target.value });
  }

  render() {    
    return (
      <div>
        <h1> Build a Markdown Previewer</h1>
        <section id="main-app-area">
          <Editor textarea={this.state.textarea} onChange={this.handleChange} />
          <Preview markdown={this.state.textarea} />
        </section>
      </div>
    )
  }
}

export default App;
