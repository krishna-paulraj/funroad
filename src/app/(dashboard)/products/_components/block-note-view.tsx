"use client";

import "@blocknote/core/fonts/inter.css";
import { BlockNoteView } from "@blocknote/mantine";
import "@blocknote/mantine/style.css";
import { useCreateBlockNote } from "@blocknote/react";

interface Props {
  setContent: (doc: object) => void;
}

const BlockNoteViewComponet = ({ setContent }: Props) => {
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "heading",
        content: "Descibe Your Product",
      },
    ],
    uploadFile: async (file: File) => {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const { url } = await res.json();
      return url;
    },
  });

  return (
    <BlockNoteView
      editor={editor}
      theme={"light"}
      onChange={() => setContent(editor.document)}
    />
  );
};

export default BlockNoteViewComponet;
