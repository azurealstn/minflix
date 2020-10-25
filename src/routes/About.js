import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about__container">
      <h1>프로젝트 설명</h1>
      <div className="about__content">
          이 프로젝트는 영화 사이트입니다. <br/>
          API는 YTS라는 사이트에서 요청했고 <br/>
          몇 개의 영화에 대한 정보를 확인하실 수 있습니다. <br/>
          아래는 저의 블로그와 깃허브 주소입니다.
          <div className="add">
            <a href="https://azurealstn.tistory.com" target="blank">블로그</a>
            <a href="https://azurealstn.github.io/minflix" target="blank">깃허브</a>
          </div>
      </div>
    </div>
  );
}

export default About;