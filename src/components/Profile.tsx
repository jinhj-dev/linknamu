import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image?: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <div className="relative h-36 w-36 overflow-hidden rounded-full bg-emerald-100 ring-4 ring-white shadow-md sm:h-40 sm:w-40 dark:bg-emerald-900 dark:ring-neutral-800">
        {image ? (
          <Image
            src={image}
            alt={`${name} 프로필 사진`}
            fill
            sizes="160px"
            className="object-cover"
            unoptimized={image.endsWith(".svg")}
            priority
          />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-5xl font-bold text-emerald-700 dark:text-emerald-200">
            {name.charAt(0)}
          </span>
        )}
      </div>
      <h1 className="mt-5 text-xl font-bold sm:text-2xl">{name}</h1>
      <p className="mt-1 text-sm text-neutral-600 sm:text-base dark:text-neutral-400">{bio}</p>
    </section>
  );
}
