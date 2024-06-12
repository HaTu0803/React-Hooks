import { useContext, useMemo } from "react";
import { NoteContext } from "../contexts/NoteContext";

const useNotesStatistics = () => {
  const { notes } = useContext(NoteContext);

  const statistics = useMemo(() => {
    if (!notes || !Array.isArray(notes)) {
      return {
        totalNotes: 0,
        over16: 0,
        under17: 0
      };
    }

    const totalNotes = notes.length;
    const over16 = notes.filter(note => note.age > 16).length;
    const under17 = notes.filter(note => note.age < 17 ).length;

    return { totalNotes, over16, under17 };
  }, [notes]);

  return statistics;
};

export default useNotesStatistics;
