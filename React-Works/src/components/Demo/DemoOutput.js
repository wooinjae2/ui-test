import React from 'react';

const DemoOutput = React.memo(props => {
    console.log('re evaluating component');
    return <p>{props.show? 'show Paragraph' : ''}</p>
})

export default DemoOutput;