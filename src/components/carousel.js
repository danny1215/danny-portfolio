
import React from 'react';
import Card from '../components/card'
import mulesoft from '../assets/images/danny-certificate.png';
import password from '../assets/images/danny1215.github.io_danielHomeWork3_.png';
import travel from '../assets/images/dubai_image_0.jpg';
import { Container } from 'react-bootstrap';


class Carousel extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'mulesoft certified',
                    imgsrc: mulesoft,
                    link: 'https://github',
                    selected: 'false'
                },
                {
                    id: 1,
                    title: 'password generator',
                    imgsrc: password,
                    link: 'https://github',
                    selected: 'false'
                },
                {
                    id: 2,
                    title: 'travel guide',
                    imgsrc: travel,
                    link: 'https://github',
                    selected: 'false'
                },
            ]
        }
    }

    handleCardClick = (id, card) =>{
        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false: true;

        items.forEach(item =>{
            if(item.id !==id){
                item.selected = false;
            }
        });
        this.setState({

            items

        });

        }

        makeItems = (items) =>{
            return items.map(item =>{
                return <Card item={item} onClick={(e => this.hundleCardClick(item.id, e))} key={item.id}/>
            })
        }
    render() {
        return(
            <Container fluid={true}>
                <row className="justigfy-content-around">
                    {this.makeItems(this.state.items)}
                </row>
            </Container>
        );
    }
}
export default Carousel;