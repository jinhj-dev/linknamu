type LinkCardProps = {
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

// 글래스모피즘: 반투명 흰 배경 + 배경 블러 + 얇은 밝은 테두리. 호버는 살짝 밝아지고 1px 뜨는 정도만.
// 3칸 그리드(빈칸 | 제목 | 클릭 수)로 제목은 가운데, 클릭 수는 오른쪽에 둡니다.
export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="grid w-full grid-cols-[1fr_auto_1fr] items-center gap-3 rounded-2xl border border-white/60 bg-white/45 px-6 py-4 text-[15px] font-medium shadow-[0_4px_20px_-6px_rgba(120,72,40,0.15)] backdrop-blur-md transition duration-200 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_8px_24px_-8px_rgba(120,72,40,0.22)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500 active:translate-y-0 motion-reduce:transition-none motion-reduce:hover:translate-y-0 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
    >
      <span aria-hidden />
      <span className="text-center">{title}</span>
      <span className="justify-self-end text-xs font-normal tabular-nums text-muted">
        <span className="sr-only">클릭 수 </span>
        {count.toLocaleString("ko-KR")}회
      </span>
    </a>
  );
}
