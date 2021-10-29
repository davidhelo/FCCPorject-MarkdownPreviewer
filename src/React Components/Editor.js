import React from 'react';
 
const Editor = (props) => {
    return (
        <div>
            <toolbar></toolbar>
            <textarea 
                id="editor" 
                type="text"
                placeholder="this is the editor"
                value={props.markText}
                onChange={props.onChange}>
            </textarea>
        </div>
    );
};

/*
class Editor extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <toolbar></toolbar>
                <textarea 
                    id="editor" 
                    placeholder="this is the editor"
                    value={this.props.markText}
                    onChange={this.props.onChange}>
                </textarea>
            </div>
        );
    }
};
*/
export default Editor;