import React from 'react';

const Editor = (props) => {
    return (
            <textarea 
                id="editor"
                type="text"
                value={props.markText}
                onChange={props.onChange}>
            </textarea>
    );
};

export default Editor;