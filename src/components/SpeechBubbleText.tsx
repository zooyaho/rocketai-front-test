interface SpeechBubbleTextPropsType {
  top: number;
  left: number;
  width: number;
  height: number;
  children: React.ReactNode;
}

// 배경 이미지 위에 절대 위치로 말풍선 텍스트를 배치하는 컴포넌트입니다.
// 위치 및 크기는 % 단위로 받아 반응형 대응이 가능하게 설계되어 있습니다.
const SpeechBubbleText = ({
  top,
  left,
  width,
  height,
  children,
}: SpeechBubbleTextPropsType) => {
  return (
    <div
      className="absolute text-[17px] font-semibold leading-snug text-center flex items-center justify-center"
      style={{
        top: `${top}%`,
        left: `${left}%`,
        width: `${width}%`,
        height: `${height}%`,
      }}
    >
      <p>{children}</p>
    </div>
  );
};
export default SpeechBubbleText;
