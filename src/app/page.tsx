import CardNote from "@/components/card/cardNote";
import { ModeToggle } from "@/components/toggleDark";

export default function Home() {
  return (
    <main className="py-7 grid grid-cols-grid-card gap-5">
      {[1, 2, 3, 4, 5].map((index) => {
        return <CardNote index={index} key={index} />;
      })}
    </main>
  );
}
