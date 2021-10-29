import React from 'react';
 

class Previewer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                {/*<Toolbar />*/}
                <div id="preview" placeholder="this is the preview"></div>
            </div>
        );
    }
};

export default Previewer;