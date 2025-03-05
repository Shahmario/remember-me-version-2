import Image from "next/image";
import Counter from "@/components/Counter";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Counter
          title="Counter 1"
          description="This is a simple counter component."
        />
        <Counter
          title="Counter 2"
          description="This is another counter component."
        />
      </main>
      <Link href="/dashboard" className="underline">  
        Dashboard
      </Link>
    </div>
  );
}
