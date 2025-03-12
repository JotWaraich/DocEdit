import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1 className="text-5xl text-teal-600 font-bold">DocEdit</h1>
      <Link href="/pages">
        <button className="flex items-center justify-center px-4 py-2 mt-4 text-white bg-blue-950 rounded-md gap-2">
          Signin/Signup
        </button>
      </Link>
    </div>
  );
}
