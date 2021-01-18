import React from 'react';

const like = (props) => {
    return (
         <button onClick={props.handleLike}>Like</button>
     );
   
};

export default like;