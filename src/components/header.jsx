import React from 'react';
import {render} from 'react-dom';
import {
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class Header extends React.Component {
  render() {
    let style = {
      background: {
        backgroundColor: '#138496',
        display: 'flex',
        flexDirection: 'row'
      },

      links: {
        color:'#EBF2F0',
        fontSize:20,
        fontFamily:'Helvetica'
      },
    }

    return (
      <div style={style.background}>
        <Nav>
          <NavItem>
            <NavLink style={style.links} href='/'> Teian </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
