import { useEffect, useState } from "react";
import SpeechBubble from "@/components/SpeechBubbleText";

const speechData = [
  {
    top: 30.8,
    left: 10,
    width: 50,
    height: 5,
    text: (name: string) => (
      <>
        이제 본격적으로
        <br />
        {name}님의 사주팔자를
        <br />
        분석해볼 차례네요.
      </>
    ),
  },
  {
    top: 48,
    left: 10.5,
    width: 56,
    height: 4.9,
    text: (name: string) => (
      <>
        제가 {name}님의 사주를
        <br />
        보기 쉽게 표로 정리했어요.
      </>
    ),
  },
];

const SpeechBubbleScript = () => {
  const [name, setName] = useState("OO");

  useEffect(() => {
    // 데이터를 가져오는 동작을 시뮬레이션하기 위해 useEffect + useState를 사용했습니다.
    setName("홍길동");
  }, []);

  return (
    <>
      {speechData.map((bubble, idx) => (
        <SpeechBubble
          key={idx}
          top={bubble.top}
          left={bubble.left}
          width={bubble.width}
          height={bubble.height}
        >
          {bubble.text(name)}
        </SpeechBubble>
      ))}
    </>
  );
};

export default SpeechBubbleScript;
