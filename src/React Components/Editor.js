import React from 'react';

const Editor = (props) => {
    return (
        <div>
            <textarea 
                id="editor" 
                type="text"
                value={props.markText}
                onChange={props.onChange}>
            </textarea>
        </div>
    );
};

export default Editor;