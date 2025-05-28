import SpeechBubbleScript from "@/components/home/SpeechBubbleScript";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative w-full max-w-md mx-auto sm:border-x">
      {/* 배경 이미지 */}
      <Image
        src="/images/layer_1.png"
        alt="사주팔자 웹툰 이미지"
        width={448}
        height={1400}
        priority
      />
      {/* 말풍선 문구 */}
      <SpeechBubbleScript />
    </div>
  );
}
