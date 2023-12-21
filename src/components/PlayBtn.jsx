

function PlayBtn({StartGameHandler}) {

  return (
    <div className="flex items-center justify-center text-6xl text-white mt-64">
      <button
        onClick={StartGameHandler}
        className="border-sky-400  border-2 py-4 px-8 rounded bg-sky-400 hover:py-6 hover:px-10 transition-all"
      >
        Play!
      </button>
      <button className="border-red-500 border-2 p-4 rounded bg-red-500 ml-4 hover:p-6 transition-all">
        Stop
      </button>
    </div>
  );
}

export default PlayBtn;
