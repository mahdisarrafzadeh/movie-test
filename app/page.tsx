import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen  items-center justify-center ">
      <Link href="/movies" className="bg-yellow-500 text-3xl p-3 rounded-lg">
        لیست فیلم ها
      </Link>
    </main>
  );
}
