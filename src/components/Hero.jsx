
const Hero = () =>  {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className="flex justify-between items-center flex-row w-full mb-10 mt-3">
        <div className="flex flex-row items-center gap-1">
        <img src="./gear.png" alt="logo" className="w-10 object-contain"/>
        <h1 className="font-bold text-2xl cursor-pointer" 
          type="button" 
          onClick={() => {window.open('https://www.facebook.com/profile.php?id=100040536132634')}}>
          Abu<span className="purple_gradient">Kiks</span>
        </h1>
        </div>

        <button 
        type="button"
        onClick={() => {window.open('https://github.com/xJohnLrac')}}
        className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text ">
        Summarize Articles with <br className="max-md:hidden"/>
        <span className="purple_gradient">GenerativeAI GPT-5</span>
      </h1>

      <h2 className="desc">
      Unlock efficient content consumption with GenerativeAI GPT-5. This advanced technology offers concise, accurate article summaries, streamlining your reading experience. Say goodbye to information overload and embrace effortless knowledge extraction.
      </h2>
    </header>
  )
}

export default Hero