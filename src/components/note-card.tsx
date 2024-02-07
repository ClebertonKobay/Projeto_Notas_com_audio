export function NoteCard(){
    return(
        <>
        <button 
        className='rounded-md text-left bg-slate-800 p-5 space-y-3 relative outline-none
        hover:ring-2 hover:ring-slate-600 focus-visible:ring-2 focus-visible:ring-lime-400
        '>
          <span
            className='text-start font-medium text-slate-300'>
            há 2 dias
          </span>
          <p className='text-sm leading-6 text-slate-400'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat dolor nihil similique natus officia voluptas, laudantium quaerat ratione. Aliquam ipsa numquam rem architecto facere nemo reprehenderit itaque quia repudiandae atque.
          </p>
          <div
            className='absolute bottom-0 left-0 h-1/2 w-full bg-gradient-to-t from-black/60 to-black/0 pointer-events-none'
          />
        </button>

        </>
    )
}