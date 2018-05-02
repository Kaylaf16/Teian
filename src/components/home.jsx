import React from 'react';
import {render} from 'react-dom';
import Header from './header.jsx'
import { Container, Row, Col, Button,Input } from 'reactstrap';

class Home extends React.Component {

  render () {
    var divStyle ={
      marginLeft:"auto",
      marginRight:"auto"
    }
    // var InputStyle ={
    //   fontFamily: 'Helvetica',
    //   position: 'absolute',
    //   top: '50%',
    //   left: '50%',
    //   right: '50%',
    //   bottom: '50%',
    // }

    var InputStyle ={
      width: '100%',
    }

    var FormButton ={
      position: 'absolute',
      top: '50%',
      left: '50%',
    }

    var InputCol={
      paddingLeft: '0'
    }

    var ButtonCol={
      paddingRight: '0'
    }

    // return (<div style = {divStyle}>
    //   <Header />
    //   <form method= "POST" action = "/AnimeSearch" encType="application/x-www-form-urlencoded">
    //   <input style = {InputStyle} type="text"autoComplete="off" placeholder="Search for Anime" name="animesearch" id="animesearch"/>
    //   <button id = "search" style = {FormButton}>Search</button>
    //   </form>
    // </div>)

    return (<div style = {divStyle}>
      <Header />
      <div class="centered" style= {{ marginTop: '15em' }}>
        <form method= "POST" action = "/AnimeSearch" encType="application/x-www-form-urlencoded">
          <Container>
            <Row>
              <Col md="12" md={{ size: 5, offset: 3 }} style={{paddingRight: '0'}}>
                <Input style = {InputStyle} type="text"autoComplete="off" placeholder="Search for Anime" name="animesearch" id="animesearch"/>
              </Col>
              <Col md="12" md={{ size: 1 }} style={{paddingLeft:'0'}}>
                <Button color="info" id="search">Search</Button>
              </Col>
            </Row>
          </Container>
        </form>
      </div>
    </div>)
  }
}
export default Home;
