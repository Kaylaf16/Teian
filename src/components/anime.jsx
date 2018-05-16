import React from 'react';
import {render} from 'react-dom';
import {Container, Row, Col, Button, Card, CardImg, CardText, CardBody,
CardTitle, CardSubtitle, CardDeck} from 'reactstrap';

import Header from './header.jsx'
import tester from '../../public/oneanime.json'


class Anime extends React.Component {
  constructor(props){
    super(props);
    this.state = {genres: []};
  }

  componentWillMount() {
    const id = this.props.match.params.id
    console.log(id)
    fetch(`/api/v1/anime/${id}`)
      .then((anime) => {
          return anime.json();
      }).then((data)=>{
          console.log(data.genre);
          this.setState({
            title: data.title,
            synopsis: data.synopsis,
            image: data.image_url,
            genres: data.genre,
          });
      })
  }


  displayReccomendations(){
    return (
        <Col md = "5">
          <Card>
            <CardBody>
              <CardTitle>Cowboy Bebop</CardTitle>
              <CardSubtitle>Sample Reccomendation</CardSubtitle>
            </CardBody>
            <img width = "100%" src="https://myanimelist.cdn-dena.com/images/anime/4/19644.jpg"
              style={{
                height:"310px",
              }}/>
            <CardBody>
              <CardText>Because Everyone should watch Cowboy Bebop.</CardText>
              <Button>Link to Cowboy Bebop's page</Button>
            </CardBody>
          </Card>
        </Col>
    );
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
              <h1> {this.state.title} </h1>
            </Col>
          </Row>

          <Row>
            <Col md="3">
              <img src={this.state.image} />
            </Col>
            <Col md = "9">
              <p>
                {this.state.synopsis}
              </p>
            </Col>
          </Row>

          <Row>
            <Col md="9" offset="3">
              {this.state.genres.map(obj => <Button outline color="info">{obj.name}</Button>)}
            </Col>
          </Row>

          <Row>
            <CardDeck>
              {this.displayReccomendations()}
              {this.displayReccomendations()}
              {this.displayReccomendations()}
            </CardDeck>
          </Row>
        </div>
      </Container>
    </div>
    )
  }
}
export default Anime
