import ScrambleWords from "@/components/others/ScrambleWords";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-neutral-950">
      <ScrambleWords text={"Javier Pizarro Ortega"}/>
    </main>
  );
}
