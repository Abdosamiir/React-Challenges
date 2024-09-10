import Link from "next/link";

export default function Navigaton() {
  return (
    <div>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/account">Account</Link>
      </li>
      <li>
        <Link href="/cabins">Cabins</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
      </li>
    </div>
  );
}
