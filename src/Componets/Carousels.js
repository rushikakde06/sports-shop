import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import constdata from '../Shared/consdata';

export class Carousels extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         
      }
    }
    
    render() {
        return (
            <div  >
                  <Carousel>
      <Carousel.Item interval={1000}>
        <img  height={400}
          className="d-block w-100"
          src={constdata.cricketkit}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img height={400}
          className="d-block w-100"
          src={constdata.football2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  height={400}
          className="d-block w-100"
          src={constdata.csk}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
                
            </div>
        )
    }
}

export default Carousels
