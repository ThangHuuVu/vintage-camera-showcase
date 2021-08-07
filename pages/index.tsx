import dynamic from "next/dynamic";
import React from "react";

const MainScene = dynamic(() => import("@/components/MainScene"), {
  ssr: false,
});

export default function IndexPage(): JSX.Element {
  return <MainScene />;
}
