import { ChangeEvent, useState } from 'react'
import logo from './asset/Logo.svg'
import { NewNoteCard } from './components/new-note-card'
import { NoteCard } from './components/note-card'

interface Note {
  id: string,
  date: Date,
  content: string
}

export function App() {
  const [search, setSearch] = useState('');
  const [notes, setNotes] = useState<Note[]>(() => {
    const notesOnStorage = localStorage.getItem('notes')

    if (notesOnStorage) {
      console.log(JSON.parse(notesOnStorage)[0])
      return JSON.parse(notesOnStorage);
    }
    return []
  });

  function onNoteCreated(content: string) {
    const newNote = {
      id: crypto.randomUUID(),
      content,
      date: new Date()
    }

    const notesArray = [newNote, ...notes];

    setNotes(notesArray);
    localStorage.setItem('notes', JSON.stringify(notesArray))

  }

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault();
    const query = event.target.value;
    setSearch(query)

  }

  const filteredNotes = search === '' ? notes : notes.filter((notes) => {
    return notes.content.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className='mx-auto max-w-6xl my-12 space-y-6 px-5'>
      <img src={logo} alt="Logo" />

      <form action="" className='w-full '>
        <input
          type="text"
          placeholder='Busque em suas notas'
          className='w-full bg-transparent text-3xl font-semibold tracking-tight placeholder:text-slate-500 outline-none'
          onChange={handleSearch}
        />
      </form>

      <div className='h-px bg-slate-700' />

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[250px] gap-6'>

        <NewNoteCard onNoteCreated={onNoteCreated} />{
          filteredNotes.map((note) => {
            return <NoteCard note={note} key={note.id} />
          })
        }
      </div>
    </div>
  )
}
