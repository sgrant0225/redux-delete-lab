//This component will be in charge od displaying the information for a single band. 

import React from 'react';
import Band from '../components/Band';

const Bands = props => {
    console.log(props)
    const bands = props.bands.map((band) => <Band key={band.id} name={band} deleteBand={props.deleteBand} />) 
    console.log(bands)
    return (
        <div>
            {bands}
        </div>
    )
}

export default Bands;