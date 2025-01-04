import Link from "next/link";
import Button from "./components/button/Button";

export default function Home() {
  return (
    <main>
      <Link href="/home">
        <Button />
      </Link>
    </main>
  );
}
