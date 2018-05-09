import React from 'react';
import {render} from 'react-dom';
import {Container, Row, Col, Button} from 'reactstrap';
import Header from './header.jsx'
//import AnimeCard from './animecard.jsx'

class Anime extends React.Component {
  render(){

    var RowStyle = {
      top: '50%',
    }

    return(
    <div>
      <Header />

      <Container>
        <div style={RowStyle}>
          <Row>
            <Col md="6" offset="3">
              <h1> Weiss Kreuz, White Cross </h1>
            </Col>
          </Row>
          
          <Row>
            <Col md="3">
              <img src="https://myanimelist.cdn-dena.com/images/anime/13/23697.jpg" />
            </Col>

          </Row>
        </div>
      </Container>
    </div>
    )
  }
}
export default Anime
