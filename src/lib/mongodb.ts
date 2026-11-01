import "server-only";
import { MongoClient, type Collection } from "mongodb";

export type ClickDoc = {
  /** 링크 id(src/data/profile.ts의 links[].id) */
  _id: string;
  count: number;
};

// 개발 중 핫 리로드나 서버리스 함수 재사용 시 연결이 계속 새로 생기지 않도록 전역에 보관합니다.
const globalForMongo = globalThis as unknown as { _mongoClientPromise?: Promise<MongoClient> };

function getClient(): Promise<MongoClient> {
  if (!globalForMongo._mongoClientPromise) {
    const uri = process.env.MONGODB_URI;
    if (!uri) throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다(.env.local 확인).");
    globalForMongo._mongoClientPromise = new MongoClient(uri).connect().catch((err) => {
      // 연결에 실패하면 다음 요청에서 다시 시도할 수 있도록 캐시를 비웁니다.
      globalForMongo._mongoClientPromise = undefined;
      throw err;
    });
  }
  return globalForMongo._mongoClientPromise;
}

/** DB 이름은 URI 경로(…mongodb.net/linknamu)에서 가져옵니다. */
export async function getClicksCollection(): Promise<Collection<ClickDoc>> {
  const client = await getClient();
  return client.db().collection<ClickDoc>("clicks");
}
