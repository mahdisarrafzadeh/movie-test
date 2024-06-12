import useHomePage from "@/app/useHomePage";
import Link from "next/link";

export default function Home() {
  const query = useHomePage();
  return (
    <main className="flex min-h-screen items-center justify-center ">
      <Link
        href={{ pathname: "/movies", query }}
        className="bg-yellow-500 text-3xl p-3 rounded-lg"
      >
        لیست فیلم ها
      </Link>
    </main>
  );
}
