import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import { profile } from "@/data/profile";

// 와이어프레임(wireframe.png) 구조: 원형 프로필 사진 → 이름 → 한 줄 소개 → 링크 카드 세로 목록
export default function Home() {
  return (
    <main className="relative mx-auto flex w-full max-w-md flex-1 flex-col px-7 pt-16 pb-20 sm:pt-24">
      {/* 장식용 흐린 빛 번짐: 글래스 카드 뒤로 은은한 색이 비치게 합니다. */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/20" />
        <div className="absolute top-1/2 -right-24 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl dark:bg-purple-900/20" />
      </div>

      <Profile
        name={profile.name}
        bio={profile.bio}
        image={profile.image}
        avatarText={profile.avatarText}
      />

      <nav aria-label="링크 목록" className="mt-12">
        <ul className="flex flex-col gap-5">
          {profile.links.map((link) => (
            <li key={link.id}>
              <LinkCard title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
}
