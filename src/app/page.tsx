import Navbar from "@/components/global/navbar";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";

export default function Home() {
  const words = ["manage", "store", "share"];
  return (
    <main>
      <Navbar />
      <section className=" md:py-20 py-10">
        <div className="h-[40rem] flex justify-center items-center px-4">
          <div className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
            Transform how you{" "}
            <FlipWords words={words} className="mr-2" />{" "}
            <br />
            <p className="justify-center flex mt-4">your files today.</p>
          </div>
        </div>
      </section>
    </main>
  );
}