import dynamic from "next/dynamic";
import React from "react";

const MainScene = dynamic(() => import("@/components/MainScene"));

export default function IndexPage(): JSX.Element {
  return <MainScene />;
}
