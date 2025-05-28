import { cn } from "@/lib/utils";
import Image from "next/image";
import SajuHeader from "./SajuHeader";
import SajuTable from "./SajuTable";

const SajuCard = () => {
  return (
    <div
      className={cn(
        "absolute top-[66.5%] left-[12px] right-[12px]",
        "border-[3px] border-saju-card-border",
        "bg-saju-card-bg shadow-saju-card"
      )}
    >
      {/* 선 ui */}
      <div
        className={cn(
          "absolute top-0 bottom-0 left-[8px] w-[1px]",
          "bg-pri-navy"
        )}
      />
      <div
        className={cn(
          "absolute top-0 bottom-0 right-[8px] w-[1px] bg-pri-navy"
        )}
      />
      <div
        className={cn("absolute top-[8px] left-0 right-0 h-[1px] bg-pri-navy")}
      />
      <div
        className={cn(
          "absolute bottom-[8px] left-0 right-0 h-[1px] bg-pri-navy"
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
      {/* 상단 사용자 문구 */}
      <SajuHeader />
      {/* 사주 테이블 */}
      <SajuTable />
    </div>
  );
};

export default SajuCard;
