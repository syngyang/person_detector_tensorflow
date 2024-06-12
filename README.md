### 설치
* npx create-next-app@latest
* npm i react-webcam
* npm i @tensorflow-models/coco-ssd @tensorflow/tfjs
* ( from : https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd )
* 첫번째: load모델( as cocoSSDLoad ) 을 import 함 ( async 처리 )

### 주요 페이지
* app>page.js
* app>components>ObjectDetecttion
* app>util>renderPredictions


## 시작하기

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


