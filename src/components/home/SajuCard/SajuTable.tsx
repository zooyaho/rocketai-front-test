import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

// 사용자 사주 더미 데이터 정의
const sajuUserDummyData = [
  [
    { title: "傷官", subtitle: "(상관)" },
    { title: "比肩", subtitle: "(비견)" },
    { title: "傷官", subtitle: "(상관)" },
    { title: "傷官", subtitle: "(상관)" },
  ],
  [
    { title: "壬", subtitle: "陽水" },
    { title: "丁", subtitle: "陰火" },
    { title: "癸", subtitle: "陰水" },
    { title: "癸", subtitle: "陰水" },
  ],
  [
    { title: "寅", subtitle: "陽木" },
    { title: "巳", subtitle: "陰火" },
    { title: "亥", subtitle: "陰水" },
    { title: "酉", subtitle: "陰金" },
  ],
  [
    { title: "比肩", subtitle: "(비견)" },
    { title: "劫財", subtitle: "(겁재)" },
    { title: "食神", subtitle: "(식신)" },
    { title: "偏財", subtitle: "(편재)" },
  ],
  [
    { title: "死", subtitle: "(사)" },
    { title: "帝旺", subtitle: "(제왕)" },
    { title: "胎", subtitle: "(태)" },
    { title: "長生", subtitle: "(장생)" },
  ],
  [
    { title: "劫殺", subtitle: "(겁살)" },
    { title: "地殺", subtitle: "(지살)" },
    { title: "驛馬殺", subtitle: "(역마살)" },
    { title: "將星殺", subtitle: "(장성살)" },
  ],
  [
    null,
    null,
    [{ title: "天乙", subtitle: "(천을귀인)" }],
    [
      { title: "天乙", subtitle: "(천을귀인)" },
      { title: "太極", subtitle: "(태극귀인)" },
      { title: "文昌", subtitle: "(문창귀인)" },
    ],
  ],
];

// 셀 데이터 타입 정의
type SajuCell = { title: string; subtitle: string };
type SajuCellData = SajuCell | SajuCell[] | null;

// 상단 헤더 및 행 헤더 데이터
const sajuColHeaders = ["", "時", "日", "月", "年"];
const sajuRowHeaders = [
  { title: "十星", subtitle: "(십성)" },
  { title: "天干", subtitle: "(천간)" },
  { title: "地支", subtitle: "(지지)" },
  { title: "十星", subtitle: "(십성)" },
  { title: "十二運星", subtitle: "(십이운성)" },
  { title: "十二神殺", subtitle: "(십이신살)" },
  { title: "貴人", subtitle: "(귀인)" },
];

const SajuTable = () => {
  const [sajuUserData, setSajuUserData] = useState<SajuCellData[][]>([]);

  useEffect(() => {
    // 데이터를 가져오는 동작을 시뮬레이션하기 위해 useEffect + useState를 사용했습니다.
    setSajuUserData(sajuUserDummyData);
  }, []);

  return (
    <div
      className={cn(
        "mx-[20px] mb-8 text-center",
        "border-r-[1px] border-b-[1px] border-black"
      )}
    >
      {/* Header */}
      <div className={cn("grid grid-cols-5 font-semibold text-[20px]")}>
        {sajuColHeaders.map((col, i) => (
          <div
            key={i}
            className={cn(
              "flex justify-center items-center py-2",
              i === sajuColHeaders.length - 1
                ? "border-r-0"
                : i === 0
                ? "border-black border-r-[1px]"
                : "border-r-[0.5px] border-saju-table-border-sub"
            )}
          >
            {col}
          </div>
        ))}
      </div>

      {/* Body */}
      {sajuUserData.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={cn(
            "grid grid-cols-5 text-[10px]",
            rowIdx !== 2
              ? "border-t-[1px] border-black"
              : "border-t-[0.5px] border-saju-table-border-sub"
          )}
        >
          {/* Row Header */}
          <div className="flex flex-col justify-center items-center py-2 border-r-[1px] border-black">
            <p className="text-sm font-semibold">
              {sajuRowHeaders[rowIdx].title}
            </p>
            <p>{sajuRowHeaders[rowIdx].subtitle}</p>
          </div>

          {/* Cells */}
          {row.map((cell, cellIdx) => (
            <div
              key={cellIdx}
              className={cn(
                "py-2 flex justify-center items-center flex-col bg-white",
                cellIdx === row.length - 1
                  ? "border-r-0"
                  : "border-r-[0.5px] border-saju-table-border-sub"
              )}
            >
              {cell === null ? (
                <p>(없음)</p>
              ) : Array.isArray(cell) ? (
                cell.map((item, i) => (
                  <div key={i} className={cn(i > 0 && "mt-[10px]")}>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p>{item.subtitle}</p>
                  </div>
                ))
              ) : (
                <>
                  <p className="text-sm font-semibold">{cell.title}</p>
                  <p>{cell.subtitle}</p>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SajuTable;
