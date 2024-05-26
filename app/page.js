import ObjectDetection from "@/components/ObjectDetection";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-8">
      <h1 className="gradient-title font-extrabold text-3xl md:text-6xl tracking-tighter text-center">
        Detection Alarm
      </h1>
      <ObjectDetection />
    </main>
  );
}
