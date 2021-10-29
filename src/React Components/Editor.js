import React from 'react';
 

class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <toolbar></toolbar>
                <textarea id="editor" placeholder="this is the editor"></textarea>
            </div>
        );
    }
};

export default Editor;