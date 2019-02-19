import React, { Component } from 'react';
import './App.css';
import marked from 'marked';
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
Now let us add some code!
\`\`\`
    if (isAwesome){
      return true
    }
\`\`\`
____

Some \`<span><div></div></span>\` div~! 
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textarea: displayAtStart,
      markdown: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount = () => {
    this.updatePreview();
  }

  updatePreview = () => {
    // selects DOM node
    let preview = document.getElementById('preview');

    // removed all child nodes for reset
    while (preview.firstChild) {
      preview.firstChild.remove();
    }

    // converts markdown to HTML
    let convertedMarkdown = marked(this.state.textarea);

    // parses 
    const parser = new DOMParser();
    let doc = parser.parseFromString(convertedMarkdown, "text/html");
    doc = doc.activeElement.innerHTML;
    preview.insertAdjacentHTML("afterbegin", doc)

  }

  handleChange(event) {
    this.setState({ textarea: '' });
    this.setState({ textarea: event.target.value });
    this.updatePreview();
  }

  render() {    
    return (
      <div>
        <h1> Build a Markdown Previewer</h1>
        <section id="main-app-area">
          <Editor textarea={this.state.textarea} onChange={this.handleChange} />
          <Preview markdown={this.state.markdown} />
        </section>
      </div>
    )
  }
}

export default App;
