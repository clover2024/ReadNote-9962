import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiSave, BiTrash } from 'react-icons/bi';

const NoteEditor = ({ note, onSave, onDelete }) => {
  const [title, setTitle] = useState(note?.title || '');
  const [content, setContent] = useState(note?.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...note, title, content, date: new Date().toISOString() });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white p-6 rounded-lg shadow-lg"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note title"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your notes here..."
          className="w-full h-64 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
        />
        <div className="flex justify-between">
          <button
            type="submit"
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
          >
            <BiSave />
            Save Note
          </button>
          {note && (
            <button
              type="button"
              onClick={() => onDelete(note.id)}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 flex items-center gap-2"
            >
              <BiTrash />
              Delete
            </button>
          )}
        </div>
      </form>
    </motion.div>
  );
};

export default NoteEditor;