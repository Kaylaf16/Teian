import React from 'react';
import {render} from 'react-dom';
import {Container, Row, Col, Button} from 'reactstrap';
import Header from './header.jsx'
import anime from '../../public/oneanime.json'
//import AnimeCard from './animecard.jsx'


class Anime extends React.Component {
  constructor(props){
    super(props);
  }

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
            <Col md="9" offset="2">
              <h1> {anime.result[0].title} </h1>
            </Col>
          </Row>

          <Row>
            <Col md="3">
              <img src={anime.result[0].image_url} />
            </Col>
            <Col md = "9">
              <p>
                {anime.result[0].synopsis}
              </p>
            </Col>

          </Row>
        </div>
      </Container>
    </div>
    )
  }
}
export default Anime
