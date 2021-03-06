import React from 'react';
import netflixImg from '../image/1.png';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faGift, faBell, faSquare, faCaretDown } from "@fortawesome/free-solid-svg-icons"

class Header extends React.Component {

  render() {
    return (
      <div className="header">
        <ul className="menu" ref={this.myRef}>
          <img src={netflixImg} className="title" alt="netflix"/>
          <li><button>TV프로그램</button></li>
          <li><button>영화</button></li>
          <li><button>최신 콘텐츠</button></li>
          <li><button>내가 찜한 콘텐츠</button></li>
        </ul>
        <ul className="icons">
          <li><FontAwesomeIcon icon={faSearch} /></li>
          <li><button>kids</button></li>
          <li><FontAwesomeIcon icon={faGift} /></li>
          <li><FontAwesomeIcon icon={faBell} /></li>
          <li><span className="square"><FontAwesomeIcon icon={faSquare} /></span></li>
          <li><FontAwesomeIcon icon={faCaretDown} /></li>

        </ul>
      </div>
      
    );
  }
}

export default Header;