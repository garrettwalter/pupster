import React from 'react';

const dislike = (props) => {
    return (
        <button onClick={props.handleDislike}>Dislike</button> 
    );
};

export default dislike;