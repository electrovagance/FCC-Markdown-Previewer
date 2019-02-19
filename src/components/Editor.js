import React from 'react';
import '../App.css';

const Editor = ({textarea, onChange}) => {
        return(
            <textarea rows="50" id="editor" defaultValue={textarea} onChange={onChange}>
            </textarea>
        )
    };

export default Editor;