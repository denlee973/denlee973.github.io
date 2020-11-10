import React from 'react';
import './header.css';
import Typing from 'react-typing-animation';

function TypingAni(props) {
  const subtitles = ["ui/ux designer", "full stack developer", "computer eng student", "hackathon aficionado", "robotics enthusiast"]
  const lengths = [14, 20, 20, 20, 19]
  return (
    <Typing loop="true" speed={100}>
      <h3 className="subtitle">{props.content}</h3>
      <Typing.Delay ms={3000} />
      <Typing.Backspace count={16} />
      <Typing.Delay ms={1000} />
    </Typing>
  )
}

function Header() {
  const cont = ["work in progress"]
  return (
    <div className="App">
      <h1 className="name">denny lee.</h1>
      <TypingAni content={cont} />
      <div className="small-spacer"/>
      <div>
      <a className="link" href="https://www.linkedin.com/in/dlee14/">linkedin</a>
      <a className="link" href="https://github.com/denlee973">github</a>
      <a className="link" href="https://www.instagram.com/_dn.y/">instagram</a>
      </div>
    </div>
  );
}

export default Header;
