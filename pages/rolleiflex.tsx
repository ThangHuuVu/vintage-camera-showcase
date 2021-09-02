import dynamic from "next/dynamic";
import React from "react";

const RolleiflexScene = dynamic(() => import("@/components/RolleiflexScene"), {
  ssr: false,
});

export default function RolleiflexPage(): JSX.Element {
  return <RolleiflexScene />;
}
