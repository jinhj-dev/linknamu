import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import { profile } from "@/data/profile";

// 와이어프레임(wireframe.png) 구조: 원형 프로필 사진 → 이름 → 한 줄 소개 → 링크 카드 세로 목록
export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-md flex-1 flex-col px-5 py-12 sm:py-16">
      <Profile name={profile.name} bio={profile.bio} image={profile.image} />

      <nav aria-label="링크 목록" className="mt-8">
        <ul className="flex flex-col gap-4">
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
