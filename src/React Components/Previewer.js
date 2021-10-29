import React from 'react';

const Previewer = (props) => {
    return (
            <div id="preview" dangerouslySetInnerHTML={{__html: props.showText}} />
    );
};

export default Previewer;