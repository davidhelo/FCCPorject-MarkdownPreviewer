import React from 'react';

const Previewer = (props) => {
    return (
        <div>
            {/*<Toolbar />*/}
            <div id="preview">
                <div dangerouslySetInnerHTML={{__html: props.showText}} />
            </div>
        </div>
    );
}

export default Previewer;