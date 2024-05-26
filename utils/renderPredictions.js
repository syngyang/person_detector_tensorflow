import React from 'react'
import { throttle } from 'lodash'

const playAudio = throttle(()=> {
  const audio = new Audio("/alert-alarm.wav")
  audio.play();
},8000)

export const renderPredictions = (predictions, ctx) => {
  ctx.clearRect(0,0, ctx.canvas.width,ctx.canvas.height)
  // fonts
  const font = "16px sans-serif"
  ctx.font = font;
  ctx.textBaseline = 'top';

  predictions.forEach((prediction)=> {
    const [x, y, width, height] = prediction["bbox"]
    const isPerson = prediction.class = "person";

    // 박스 만들기
    ctx.strokeStyle = isPerson ? "#ff0000" : "#00ffff";
    ctx.lineWidth = 4;
    ctx.strokeRect(x, y, width, height);

    // fill the color
    ctx.fillStyle = `rgba(255,0,0, ${isPerson ? 0.2 : 0})`
    ctx.fillRect(x, y, width, height);

    // draw the label background
    ctx.fillStyle = isPerson ? "#ff0000":"#00ffff";
    const textWidth = ctx.measureText(prediction.class).width;
    const textHeight = parseInt(font, 10);// base 10
    ctx.fillRect(x, y, textWidth + 4, textHeight + 4)

    ctx.fillStyle = "#000"
    ctx.fillText(prediction.class, x, y)

    if (isPerson){
      playAudio();
    }
  })
  
  // return (
  //   <div>renderPredictions</div>
  // )
};

