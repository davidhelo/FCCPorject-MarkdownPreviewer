import React from 'react';
 

const Previewer = (props) => {
    return (
        <div>
            {/*<Toolbar />*/}
            <div id="preview">
            <p>here renders <code>Previewer in previewer component file</code></p>
            <p>{props.showText}</p>
            </div>
        </div>
    );
}

/*
class Previewer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                
                <div id="preview">
                <p>here renders <code>Previewer in previewer component file</code></p>
                <p>{this.props.showText}</p>
                </div>
            </div>
        );
    }
};*/


export default Previewer;