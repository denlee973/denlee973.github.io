import React from 'react';
import Typing from 'react-typing-animation';

export default function TypingAni(props) {
  const subtitles = ["ui/ux designer", "full stack developer", "computer eng student", "hackathon aficionado", "robotics enthusiast"]
  const lengths = [14, 20, 20, 20, 19]
  return (
    <Typing loop={true} speed={30}>
      <h3 className={props.format}>{props.content}</h3>
      <Typing.Delay ms={2000} />
      <Typing.Backspace count={16} />
      <Typing.Delay ms={500} />
    </Typing>
  )
}