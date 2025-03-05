import React, { useState } from 'react';
import { motion } from 'framer-motion';
import NoteList from './components/NoteList';
import NoteEditor from './components/NoteEditor';
import { BiBookOpen, BiPlus } from 'react-icons/bi';

function App() {
  const [notes, setNotes] = useState([]);
  const [selectedNote, setSelectedNote] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveNote = (note) => {
    if (note.id) {
      setNotes(notes.map(n => n.id === note.id ? note : n));
    } else {
      setNotes([...notes, { ...note, id: Date.now() }]);
    }
    setIsEditing(false);
    setSelectedNote(null);
  };

  const handleDeleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
    setIsEditing(false);
    setSelectedNote(null);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div className="flex items-center gap-2">
            <BiBookOpen className="text-3xl text-indigo-600" />
            <h1 className="text-2xl font-bold text-gray-800">Reading Notes</h1>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center gap-2"
          >
            <BiPlus />
            New Note
          </button>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <NoteList
              notes={notes}
              onNoteSelect={(note) => {
                setSelectedNote(note);
                setIsEditing(true);
              }}
            />
          </div>
          <div className="sticky top-8">
            {isEditing && (
              <NoteEditor
                note={selectedNote}
                onSave={handleSaveNote}
                onDelete={handleDeleteNote}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;