import React, { useState } from 'react';

function CreateArea(props) {
  const [note, setNote] = useState({ title: '', content: '' });

  const handleSubmit = (e) => {
    props.onAdd(note);
    setNote({ title: '', content: '' });
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='title'
          value={note.title}
          onChange={(e) => setNote({ ...note, title: e.target.value })}
          placeholder='Title'
        />
        <textarea
          name='content'
          value={note.content}
          onChange={(e) => setNote({ ...note, content: e.target.value })}
          placeholder='Take a note...'
          rows='3'
        />
        <button type='submit'>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
