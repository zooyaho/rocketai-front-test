import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// 사용자 정보 타입
interface BirthInfoType {
  birthYear: string;
  birthMonth: string;
  birthDay: string;
  birthTime: string;
  name: string;
}

const SajuHeader = () => {
  const [birthInfo, setBirthInfo] = useState<BirthInfoType>();

  useEffect(() => {
    // 데이터를 가져오는 동작을 시뮬레이션하기 위해 useEffect + useState를 사용했습니다.
    const dummyData: BirthInfoType = {
      birthYear: "1980",
      birthMonth: "08",
      birthDay: "27",
      birthTime: "08:10",
      name: "김로켓",
    };
    setBirthInfo(dummyData);
  }, []);

  return (
    <>
      {birthInfo ? (
        <div
          className={cn(
            "w-full h-fit flex flex-col gap-[3px] items-center justify-center",
            "mt-[40px] mb-[26px]"
          )}
        >
          <p>{birthInfo.name}님의 사주</p>
          <p className={cn("text-[20px] font-bold")}>
            {birthInfo.birthYear}년 {birthInfo.birthMonth}월{" "}
            {birthInfo.birthDay}일 {birthInfo.birthTime}
          </p>
        </div>
      ) : (
        <>loading...</>
      )}
    </>
  );
};

export default SajuHeader;
