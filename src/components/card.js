import React from 'react';

import CardInfo from '../components/cardinfo'

function Card(props) {
    return(
        <div>
            <img className='' src={props.item.imgsrc} alt={props.item.imgsrc} />

            {props.item.selected && <CardInfo title={props.item.title} link={props.item.link}/>}

        </div>
    );
}

export default Card;