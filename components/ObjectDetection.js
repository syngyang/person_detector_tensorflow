"use client";

import React, { useEffect, useState, useRef } from "react";
import Webcam from "react-webcam";
import { load as cocoSSDLoad } from "@tensorflow-models/coco-ssd";
import * as tf from "@tensorflow/tfjs";
import { renderPredictions } from "@/utils/renderPredictions";

let detectInterval;
const ObjectDetection = () => {
  const [isLoading, setIsLoading] = useState(true);
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);

  const runcoco = async () => {
    setIsLoading(true);
    const net = await cocoSSDLoad();
    setIsLoading(false);

    detectInterval = setInterval(() => {
      runObjectDetection(net);
    }, 10);
  };
  async function runObjectDetection(params) {
    if (
      canvasRef.current &&
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      canvasRef.current.width = webcamRef.current.video.videoWidth;
      canvasRef.current.height = webcamRef.current.video.videoHeight;
      // 감지된 오브젝트 찾기 - 3가지(img, maxNumBoxes, minScore)
      const detectedObjects = await params.detect(webcamRef.current.video, undefined, 0.6);
    //   console.log('detectedObjects: ', detectedObjects);
    const context = canvasRef.current.getContext("2d")
    renderPredictions(detectedObjects, context);
    }
  }
  const showmyVideo = () => {
    if (
      webcamRef.current !== null &&
      webcamRef.current.video?.readyState === 4
    ) {
      const myVideoWidth = webcamRef.current.video.videoWidth;
      const myVideoHight = webcamRef.current.video.videoHeight;

      webcamRef.current.video.width = myVideoWidth;
      webcamRef.current.video.height = myVideoHight;
    }
    console.dir(webcamRef);
    // console.log(webcamRef.current.props.className);
    // console.log(webcamRef.current.video);// <video autoplay muted playsinline class="rounded-md w-full muted lg:h-[720px]"></video>
  };
  useEffect(() => {
    runcoco();
    showmyVideo();
  }, []);

  return (
    <div className="mt-8">
      {isLoading ? (
        <div className="gradient-text text-xl">Loading AI Model ...</div>
      ) : (
        <div className="relative flex justify-center items-center gradient p-1.5 rounded-md">
          {/* webcam */}
          <Webcam
            ref={webcamRef}
            className="rounded-md w-full muted lg:h-[720px]"
          />
          {/* canvas */}
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 z-9999 lg:h-[720px]"
          />
        </div>
      )}
    </div>
  );
};

export default ObjectDetection;
