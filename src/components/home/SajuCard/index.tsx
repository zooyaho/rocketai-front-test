import { cn } from "@/lib/utils";
import Image from "next/image";

const SajuCard = () => {
  return (
    <div
      className={cn(
        "absolute top-[66.5%] left-[12px] right-[12px]",
        "border-[3px] border-saju-card-border",
        "min-h-[621px] bg-saju-card-bg shadow-saju-card" // TODO: height fit 설정
      )}
    >
      {/* 선 ui */}
      <div
        className={cn(
          "absolute top-0 bottom-0 left-[8px] right-[8px]",
          "border-r-[1px] border-l-[1px] border-pri-navy"
        )}
      />
      <div
        className={cn(
          "absolute top-[8px] bottom-[8px] left-0 right-0",
          "border-t-[1px] border-b-[1px] border-pri-navy"
        )}
      />
      {/* 사주 상단 패턴 이미지 */}
      <Image
        src="/images/saju_pattern_left.png"
        alt="사주 상단 패턴 이미지"
        width={56}
        height={38}
        className={cn("absolute top-[45px] left-[8px] w-fit")}
      />
      <Image
        src="/images/saju_pattern_right.png"
        alt="사주 상단 패턴 이미지"
        width={56}
        height={38}
        className={cn("absolute top-[26px] right-[8px] w-fit")}
      />
    </div>
  );
};

export default SajuCard;
