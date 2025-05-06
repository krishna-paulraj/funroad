"use client";

import dynamic from "next/dynamic";

const BlockNoteViewComponet = dynamic(
  () => import("../_components/block-note-view"),
  {
    ssr: false,
  },
);

const Page = () => {
  return <BlockNoteViewComponet />;
};

export default Page;
