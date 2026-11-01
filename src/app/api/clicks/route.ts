import { connection } from "next/server";
import { profile } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

/** 모든 링크의 클릭 수를 한 번에 반환합니다. 예: { counts: { github: 42, blog: 0 } } */
export async function GET() {
  await connection(); // 빌드 시 미리 렌더링하지 않고 항상 요청 시점에 DB를 조회합니다.

  try {
    const ids = profile.links.map((link) => link.id);
    const docs = await (await getClicksCollection()).find({ _id: { $in: ids } }).toArray();

    const counts: Record<string, number> = Object.fromEntries(ids.map((id) => [id, 0]));
    for (const doc of docs) counts[doc._id] = doc.count;

    return Response.json({ counts }, { headers: { "Cache-Control": "no-store" } });
  } catch (err) {
    console.error("[GET /api/clicks]", err);
    return Response.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}
