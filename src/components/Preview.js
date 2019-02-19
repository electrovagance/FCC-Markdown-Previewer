import React, { Component } from 'react';
import '../App.css';
const marked = require('marked');

class Preview extends Component {
    createMarkdown(x) {
        return { __html: x };
    }

    render() {
        return (
            <div id="preview" dangerouslySetInnerHTML={this.createMarkdown(marked(this.props.markdown))} />
            );
    }
};

export default Preview;