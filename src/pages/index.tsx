import Link from "next/link";

export default function IndexPage(): JSX.Element {
  return (
    <div className="main">
      <Link href="/camera">
        <a>Camera</a>
      </Link>
    </div>
  );
}
