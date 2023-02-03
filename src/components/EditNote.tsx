import React from "react";
import { NoteForm } from "./NoteForm";
import { NoteData, Tag } from "../App";
import { useNote } from "./NoteLayout";

type EditNoteProps = {
  onSubmit: (id: string, data: NoteData) => void;
  onAddTag: (tag: Tag) => void;
  availableTags: Tag[];
};

export const EditNote = ({
  onSubmit,
  onAddTag,
  availableTags,
}: EditNoteProps) => {

    const note = useNote()
  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        title={note.title}
        markdown={note.markdown}
        tags={note.tags}
        onSubmit={ data => onSubmit( note.id, data )}
        onAddTag={ onAddTag }
        availableTags={availableTags}
      />
    </>
  );
};
