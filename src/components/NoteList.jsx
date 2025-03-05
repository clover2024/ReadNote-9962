import React from 'react';
import { motion } from 'framer-motion';
import { BiBook, BiTime } from 'react-icons/bi';
import { format } from 'date-fns';

const NoteList = ({ notes, onNoteSelect }) => {
  return (
    <div className="grid gap-4 p-4">
      {notes.map((note) => (
        <motion.div
          key={note.id}
          whileHover={{ scale: 1.02 }}
          className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          onClick={() => onNoteSelect(note)}
        >
          <div className="flex items-center gap-2 mb-2">
            <BiBook className="text-indigo-600" />
            <h3 className="font-semibold text-gray-800">{note.title}</h3>
          </div>
          <p className="text-gray-600 text-sm line-clamp-2">{note.content}</p>
          <div className="flex items-center gap-1 mt-3 text-xs text-gray-500">
            <BiTime />
            <span>{format(new Date(note.date), 'MMM d, yyyy')}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default NoteList;