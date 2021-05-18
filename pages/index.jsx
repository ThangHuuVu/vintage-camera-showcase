import Link from "next/link";

export default function IndexPage() {
  return (
    <div className="main">
      <Link href="/camera">
        <a>Camera</a>
      </Link>
    </div>
  );
}
