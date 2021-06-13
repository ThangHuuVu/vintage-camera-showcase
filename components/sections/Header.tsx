import NextLink from "next/link";
import React from "react";

interface ItemProps {
  name: string;
  href: string;
}
function Item({ name, href }: ItemProps): JSX.Element {
  return (
    <NextLink href={href}>
      <a>{name}</a>
    </NextLink>
  );
}

export default function Header(): JSX.Element {
  return (
    <header className="w-full flex items-center justify-between p-2 sm:p-3">
      <div className="float-left">
        <Item name="Logo" href="/" />
      </div>
      <div className="float-right flex gap-2 sm:gap-3">
        <Item name="Discover" href="/discover" />
        <Item name="About" href="/about" />
      </div>
    </header>
  );
}
