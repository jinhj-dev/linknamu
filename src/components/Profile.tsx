import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image?: string;
  avatarText?: string;
};

export default function Profile({ name, bio, image, avatarText }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {/* 위쪽 하이라이트 + 안쪽 그림자 + 부드러운 바깥 그림자로 살짝 입체감을 줍니다. */}
      <div className="@container relative h-28 w-28 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-purple-700 shadow-[0_12px_32px_-8px_rgba(88,28,135,0.45),inset_0_-6px_14px_rgba(0,0,0,0.18),inset_0_6px_12px_rgba(255,255,255,0.25)] ring-4 ring-white/70 sm:h-32 sm:w-32 dark:ring-white/10">
        {image ? (
          <Image
            src={image}
            alt={`${name} 프로필 사진`}
            fill
            sizes="128px"
            className="object-cover"
            unoptimized={image.endsWith(".svg")}
            priority
          />
        ) : (
          // 글자 크기를 원 너비(cqw) 기준으로 잡아 원 크기가 바뀌어도 비율이 유지됩니다.
          <span
            role="img"
            aria-label={`${name} 프로필 사진`}
            className="flex h-full w-full items-center justify-center whitespace-nowrap font-bold leading-none tracking-tight text-white text-[22cqw] [text-shadow:0_1px_2px_rgba(0,0,0,0.2)]"
          >
            {avatarText ?? name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-6 text-xl font-bold tracking-tight sm:text-2xl">{name}</h1>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted sm:text-[15px]">{bio}</p>
    </section>
  );
}
