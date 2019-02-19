import React from 'react';
import '../App.css';

const Preview = ({ markdown }) => {
    return (
        <div id="preview">
            {markdown}
        </div>
    )
};

export default Preview;