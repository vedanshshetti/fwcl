import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center text-center space-y-2 bg-background text-foreground font-sans">
      <h1 className="text-6xl font-bold">Free Web Component Library</h1>
      <span className="text-lg">
         My promise to you: No ads, no malware, and{" "}
        <strong>free forever ❤️</strong>
      </span>
      <Link
        href="/get-started"
        className="text-md font-mono bg-green-700 p-2 rounded-md hover:rounded-2xl hover:px-3.5 transition-all duration-100"
      >
        Get Started!
      </Link>
    </div>
  );
}
