import Link from "next/link";

export default async function Home() {

  return (
    <ul>
      <li><Link href="/demo">Demo 1</Link></li>
      <li><Link href="/demo2">Demo 2</Link></li>
    </ul>
  );
}
