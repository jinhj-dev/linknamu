export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export type ProfileData = {
  name: string;
  bio: string;
  /** public/ 폴더 기준 경로(예: "/profile.jpg"). 비워 두면 avatarText(없으면 이름 첫 글자)를 표시합니다. */
  image?: string;
  /** 사진 대신 원 안에 표시할 텍스트. 원 크기에 맞춰 글자 크기가 조절됩니다. */
  avatarText?: string;
  links: LinkItem[];
};

// TODO: 보여 주기용 더미 값입니다. 실제 이름, 소개, 사진, 링크로 바꿔 주세요.
export const profile: ProfileData = {
  name: "MY:ME(マイミー)",
  bio: "핸드메이드 레진 작품 제작,판매. 상품은 주로 메루카리에서 구매할 수 있어요",
  avatarText: "MY:ME",
  links: [
    { id: "github", title: "GitHub", url: "https://github.com" },
    { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
    { id: "blog", title: "Blog", url: "https://example.com" },
  ],
};
