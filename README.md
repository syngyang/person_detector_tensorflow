npx create-next-app@latest
npm i react-webcam
npm i @tensorflow-models/coco-ssd @tensorflow/tfjs
 ( from : https://github.com/tensorflow/tfjs-models/tree/master/coco-ssd )
- 첫번째: load모델( as cocoSSDLoad ) 을 import 함 ( async 처리 )



## Getting Started

First, run the development server:

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


## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
