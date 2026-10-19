"use client";

import { useEffect, useRef, useState } from "react";

// Lines of a Vietnamese earnings call. Tuples are split around the word that
// morphs into English and flies into the headline.
const LINES: (string | [string, string])[] = [
  "Giám đốc Tài chính: Biên lãi ròng duy trì ổn định trong khoảng dự kiến, trong khi chi phí hoạt động được kiểm soát nhờ chuyển đổi số và kỷ luật chi phí.",
  [
    "Điều phối viên: Chào mừng quý vị đến với buổi họp công bố kết quả kinh doanh quý 3 của",
    "trong bối cảnh tín dụng và tiền gửi bán lẻ cùng phục hồi.",
  ],
  "Chuyên viên phân tích: Ban lãnh đạo có thể chia sẻ về hạn mức tăng trưởng tín dụng còn lại trong năm và mức trích lập dự phòng cho bất động sản không?",
  [
    "Chủ tịch HĐQT: Đại hội đồng cổ đông đã thông qua phương án chia cổ tức và tăng",
    "điều lệ, hiện đang chờ Ủy ban Chứng khoán Nhà nước chấp thuận.",
  ],
  "Chuyên viên phân tích: Về giới hạn sở hữu nước ngoài, còn bao nhiêu room cho nhà đầu tư tổ chức quốc tế sau đợt đánh giá nâng hạng thị trường?",
  [
    "Tổng Giám đốc: Chúng tôi ghi nhận nhu cầu mạnh từ khách hàng sản xuất FDI phía Bắc, và đơn hàng trên",
    "xuất khẩu đã phục hồi rõ rệt kể từ quý hai.",
  ],
  "Giám đốc Tài chính: Dòng tiền từ hoạt động kinh doanh cải thiện đáng kể, số ngày tồn kho giảm khi bàn giao dự án nhà ở tại TP. Hồ Chí Minh tăng tốc.",
  [
    "Quan hệ nhà đầu tư: Ban lãnh đạo tái khẳng định cam kết",
    "thông tin với nhà đầu tư, đồng thời giữ nguyên kế hoạch lợi nhuận trước thuế cả năm và lộ trình tái cấp vốn trái phiếu dự kiến hoàn thành sớm, trước khi chuyển sang phần hỏi đáp với các nhà phân tích.",
  ],
  "Điều phối viên: Phần hỏi đáp xin được kết thúc tại đây. Cảm ơn quý vị đã tham dự, biên bản và tài liệu trình bày sẽ được đăng trên website của chúng tôi.",
];

// Line index -> [headline word, where the word stops as a fraction of width].
const PICKS: Record<number, [string, number]> = {
  1: ["Vietnam's", 0.06],
  3: ["Capital", 0.28],
  5: ["Markets", 0.48],
  7: ["Clarified.", 0.66],
};

const WORDS = ["Vietnam's", "Capital", "Markets", "Clarified."];

const VIETNAMESE: Record<string, string> = {
  "Vietnam's": "Việt Nam",
  Capital: "vốn",
  Markets: "thị trường",
  "Clarified.": "minh bạch",
};

type Phase = "scroll" | "pick" | "assemble" | "done";

export function HeroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const wordRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const targetRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const [phase, setPhase] = useState<Phase>("scroll");
  const [run, setRun] = useState(0);
  const [highlighted, setHighlighted] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const timers: number[] = [];
    let frame = 0;
    let cancelled = false;
    let assembled = false;

    // Move each picked word onto its slot in the headline.
    const flyToHeadline = (animate: boolean) => {
      WORDS.forEach((_, i) => {
        const word = wordRefs.current[i];
        const target = targetRefs.current[i];
        if (!word || !target) return;
        word.style.transition = "none";
        word.style.transform = "";
        const from = word.getBoundingClientRect();
        const to = target.getBoundingClientRect();
        const scale = to.height / from.height;
        if (animate) {
          void word.offsetWidth;
          word.style.transition = "transform 1400ms cubic-bezier(0.65,0,0.35,1)";
        }
        word.style.transform = `translate(${to.left - from.left}px, ${to.top - from.top}px) scale(${scale})`;
      });
    };

    const resizeObserver = new ResizeObserver(() => {
      if (assembled) flyToHeadline(false);
    });
    resizeObserver.observe(container);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.fonts.ready.then(() => {
        if (!cancelled) {
          setPhase("done");
          setHighlighted(4);
          setVisible(true);
          assembled = true;
          flyToHeadline(false);
        }
      });
      return () => {
        cancelled = true;
        resizeObserver.disconnect();
      };
    }

    wordRefs.current.forEach((word) => {
      if (word) {
        word.style.transition = "none";
        word.style.transform = "";
      }
    });

    const pageLoaded = new Promise<void>((resolve) => {
      const wait = () => timers.push(window.setTimeout(resolve, 800));
      if (document.readyState === "complete") wait();
      else window.addEventListener("load", wait, { once: true });
    });

    Promise.all([document.fonts.ready, pageLoaded]).then(() => {
      if (cancelled) return;
      const width = container.clientWidth;
      const offsets = rowRefs.current.map((row, i) => {
        if (!row) return { start: 0, end: 0 };
        const pick = PICKS[i];
        let end: number;
        if (pick) {
          const word = wordRefs.current[WORDS.indexOf(pick[0])]!;
          end = width * pick[1] - word.offsetLeft;
        } else {
          end = -((i * 137) % 400) - 100;
        }
        const travel = 900 + (i % 3) * 250;
        return { start: end + travel * (i % 2 ? -1 : 1) * -1, end };
      });

      const duration = 5000;
      const startTime = performance.now();
      let shown = false;
      const tick = (now: number) => {
        const t = Math.min(1, (now - startTime) / duration);
        const eased = 1 - Math.pow(1 - t, 2);
        rowRefs.current.forEach((row, i) => {
          if (!row) return;
          const { start, end } = offsets[i];
          const from = Math.max(start, end + 600);
          row.style.transform = `translateX(${from + (end - from) * eased}px)`;
        });
        if (!shown) {
          shown = true;
          setVisible(true);
        }
        if (t < 1) frame = requestAnimationFrame(tick);
      };
      frame = requestAnimationFrame(tick);

      timers.push(window.setTimeout(() => setPhase("pick"), duration - 600));
      for (let i = 0; i < 4; i++) {
        timers.push(window.setTimeout(() => setHighlighted(i + 1), duration - 500 + i * 450));
      }
      const assembleAt = duration - 500 + 3 * 450 + 200;
      timers.push(
        window.setTimeout(() => {
          assembled = true;
          flyToHeadline(true);
          setPhase("assemble");
        }, assembleAt),
      );
      timers.push(window.setTimeout(() => setPhase("done"), assembleAt + 1500));
    });

    return () => {
      cancelled = true;
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      timers.forEach(clearTimeout);
    };
  }, [run]);

  const replay = () => {
    setPhase("scroll");
    setHighlighted(0);
    setVisible(false);
    setRun((n) => n + 1);
  };

  const done = phase === "done";
  const english = phase === "assemble" || phase === "done";

  return (
    <div className="relative">
      <div
        ref={containerRef}
        className="relative h-[460px] overflow-hidden md:h-[620px]"
        aria-hidden="true"
      >
        <div
          className="absolute inset-0 flex flex-col justify-center gap-7 md:gap-10"
          style={{ opacity: visible ? 1 : 0, transition: "opacity 1200ms ease-out" }}
        >
          {LINES.map((line, i) => {
            const pick = PICKS[i];
            const fadeStyle = { opacity: phase === "scroll" ? 0.7 : phase === "pick" ? 0.15 : 0 };
            const fadeClass = "text-muted-foreground transition-opacity duration-1000";
            const rowClass =
              "whitespace-nowrap font-mono text-base md:text-2xl leading-none will-change-transform";
            const setRow = (el: HTMLDivElement | null) => {
              rowRefs.current[i] = el;
            };

            if (!pick || typeof line === "string") {
              return (
                <div key={i} ref={setRow} className={rowClass}>
                  <span className={fadeClass} style={fadeStyle}>
                    {`${line}  ${line}  `}
                  </span>
                </div>
              );
            }

            const [before, after] = line;
            const [word] = pick;
            const index = WORDS.indexOf(word);
            const color =
              index >= highlighted
                ? "text-muted-foreground"
                : word === "Clarified."
                  ? "text-primary"
                  : "text-foreground";
            const swap = "opacity 700ms ease-in-out 350ms, filter 700ms ease-in-out 350ms";

            return (
              <div key={i} ref={setRow} className={rowClass}>
                <span className={fadeClass} style={fadeStyle}>
                  {before + " " + VIETNAMESE[word] + " " + after + "  " + before + " "}
                </span>
                <span
                  ref={(el) => {
                    wordRefs.current[index] = el;
                  }}
                  className="inline-block origin-top-left font-sans leading-none font-bold tracking-tight"
                >
                  <span className={`relative inline-grid transition-colors duration-700 ${color}`}>
                    <span
                      className="absolute top-0 left-0 whitespace-nowrap"
                      style={{
                        gridArea: "1 / 1",
                        opacity: english ? 1 : 0,
                        filter: english ? "blur(0px)" : "blur(8px)",
                        transition: swap,
                      }}
                    >
                      {word}
                    </span>
                    <span
                      className="whitespace-nowrap"
                      style={{
                        gridArea: "1 / 1",
                        opacity: english ? 0 : 1,
                        filter: english ? "blur(8px)" : "blur(0px)",
                        transition: swap,
                      }}
                    >
                      {VIETNAMESE[word]}
                    </span>
                  </span>
                </span>
                <span className={fadeClass} style={fadeStyle}>
                  {" " + after + "  " + before + " " + VIETNAMESE[word] + " " + after + "  "}
                </span>
              </div>
            );
          })}
        </div>
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6">
          <p className="relative text-center text-5xl leading-none font-bold tracking-tight md:text-6xl lg:text-7xl">
            <span
              className="absolute right-0 -bottom-4 left-0 h-1 origin-left rounded-full bg-mekong-red md:-bottom-5 md:h-1.5"
              style={{
                transform: done ? "scaleX(1)" : "scaleX(0)",
                transition: done ? "transform 900ms cubic-bezier(0.65,0,0.35,1) 150ms" : "none",
              }}
            />
            {WORDS.map((word, i) => (
              <span key={word}>
                <span
                  ref={(el) => {
                    targetRefs.current[i] = el;
                  }}
                  className={`inline-block leading-none transition-opacity duration-200 ${i === 3 ? "text-primary" : "text-foreground"}`}
                  style={{ opacity: 0 }}
                >
                  {word}
                </span>
                {i < 3 && " "}
              </span>
            ))}
          </p>
        </div>
      </div>
      <h1 className="sr-only">Vietnam&apos;s Capital Markets Clarified.</h1>
      <button
        onClick={replay}
        className="absolute right-2 bottom-2 text-xs text-muted-foreground transition-opacity hover:text-primary"
        style={{ opacity: done ? 1 : 0 }}
      >
        ↻ Replay
      </button>
    </div>
  );
}
