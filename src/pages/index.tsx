import Image from "next/image";
import { useEffect, useState } from "react";

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

export default function Home() {
  const [name, setName] = useState("OO");

  useEffect(() => {
    // 데이터를 가져오는 동작을 시뮬레이션하기 위해 useEffect + useState를 사용했습니다.
    setName("홍길동");
  }, []);

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
      {speechData.map((bubble, idx) => (
        <div
          key={idx}
          className="absolute text-[17px] font-semibold leading-snug text-center flex items-center justify-center"
          style={{
            top: `${bubble.top}%`,
            left: `${bubble.left}%`,
            width: `${bubble.width}%`,
            height: `${bubble.height}%`,
          }}
        >
          <p>{bubble.text(name)}</p>
        </div>
      ))}
    </div>
  );
}
