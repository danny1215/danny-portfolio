
import React from 'react';
import Portfolio from '../components/portfolio';
import Carousel from '../components/carousel'

function PortfolioPage(props) {
    return(
        <div>
            <Portfolio title={props.title} />
            <Carousel/>

        </div>
       
    );
       
    
};

export default PortfolioPage;