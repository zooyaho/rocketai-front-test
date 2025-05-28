import { cn } from "@/lib/utils";

const sajuData = {
  header: ["時", "日", "月", "年"],
  rows: [
    [
      ["傷官", "(상관)"],
      ["比肩", "(비견)"],
      ["傷官", "(상관)"],
      ["傷官", "(상관)"],
    ],
    [
      ["壬", "陽水"],
      ["丁", "陰火"],
      ["癸", "陰水"],
      ["癸", "陰水"],
    ],
    [
      ["寅", "陽木"],
      ["巳", "陰火"],
      ["亥", "陰水"],
      ["酉", "陰金"],
    ],
    [
      ["比肩", "(비견)"],
      ["劫財", "(겁재)"],
      ["食神", "(식신)"],
      ["偏財", "(편재)"],
    ],
    [
      ["死", "(사)"],
      ["帝旺", "(제왕)"],
      ["胎", "(태)"],
      ["長生", "(장생)"],
    ],
    [
      ["劫殺", "(겁살)"],
      ["地殺", "(지살)"],
      ["驛馬殺", "(역마살)"],
      ["將星殺", "(장성살)"],
    ],
    [
      [], // "(없음)"
      [], // "(없음)"
      ["天乙", "(천을귀인)"],
      [
        ["天乙", "(천을귀인)"],
        ["太極", "(태극귀인)"],
        ["文昌", "(문창귀인)"],
      ],
    ],
  ],
};

const sajuRowHeaders = [
  ["十星", "(십성)"],
  ["天干", "(천간)"],
  ["地支", "(지지)"],
  ["十星", "(십성)"],
  ["十二運星", "(십이운성)"],
  ["十二神殺", "(십이신살)"],
  ["貴人", "(귀인)"],
];

const SajuTable = () => {
  return (
    <div
      className={cn(
        "mx-[20px] mb-8 text-center",
        "border-r-[1px] border-b-[1px] border-black"
      )}
    >
      {/* header */}
      <div className={cn("grid grid-cols-5 font-semibold text-[20px]")}>
        <div
          className={cn(
            "flex justify-center items-center border-r-[1px] border-black py-2"
          )}
        />
        {sajuData.header.map((col, i) => (
          <div
            key={i}
            className={cn(
              "flex justify-center items-center py-2",
              i === sajuData.header.length - 1
                ? "border-r-0"
                : "border-r-[0.5px] border-saju-table-border-sub"
            )}
          >
            {col}
          </div>
        ))}
      </div>

      {/* body */}
      {sajuData.rows.map((row, rowIdx) => (
        <div
          key={rowIdx}
          className={cn(
            "grid grid-cols-5 text-[10px]",
            rowIdx !== 2
              ? "border-t-[1px] border-black"
              : "border-t-[0.5px] border-saju-table-border-sub"
          )}
        >
          <div
            className={cn(
              "flex flex-col justify-center items-center py-2",
              "border-r-[1px] border-black"
            )}
          >
            <p className="text-sm font-semibold">{sajuRowHeaders[rowIdx][0]}</p>
            <p>{sajuRowHeaders[rowIdx][1]}</p>
          </div>

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
              {cell.length === 0 ? (
                <p>{"(없음)"}</p>
              ) : cell.length === 2 ? (
                <>
                  <p className="text-sm font-semibold">{cell[0]}</p>
                  <p>{cell[1]}</p>
                </>
              ) : (
                cell.map((text, textIdx) => (
                  <div key={textIdx} className={cn(textIdx && "mt-[10px]")}>
                    <p className="text-sm font-semibold">{text[0]}</p>
                    <p>{text[1]}</p>
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SajuTable;
