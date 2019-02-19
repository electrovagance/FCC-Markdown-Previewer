import React from 'react';
import '../App.css';

const Editor = ({textarea, onChange}) => {
        return(
            <textarea rows="50" id="editor" value={textarea} onChange={onChange} />
        )
    };

export default Editor;