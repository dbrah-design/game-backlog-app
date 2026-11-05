import './App.css'

function App() {
  

  return (
    <div className="max-w-6xl min-h-screen mx-auto px-5 sm:px-6 "> 
    
    <header className="flex h-21 items-center justify-center border-b border-card-border">
      
      <div className="flex items-center gap-2.5">
        <p className="grid place-items-center h-7.5 w-7.5 rounded-lg bg-primary text-sm text-white font-bold">B</p>
        <p className="text-[20px] font-bold tracking-tight text-secondary">backlogger</p>
      </div>
      
    </header>

    <main > 

      {/* Hero */}
      <section className="flex flex-col items-center mt-18 mb-14.5"> 

        <div className="mb-4 flex items-center gap-2">

          <div className="relative grid h-1.5 w-1.5 place-items-center rounded-full bg-primary ring-4 ring-[#f3d0c5]">
          </div>
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-muted">your personal library</p>
          
        </div>

        <h1>Game backlogs,
          <span>finally in play.</span>
        </h1>
        <p>Keep every adventure in one place. Add what's next,
        mark what's done, and make room for the next great game.</p>
        
        <div className="add-form-wrapper">
          <input id = "add-form-input" type="text" placeholder="Add a game to your backlog..." className="w-2xs"/>
          <button className="p-4 bg-red-500 border-2">Add game ↗</button>
        </div>

      </section>

      <section className="stats-row">
        
        <div className="individual-stat">
          <p>4 <span>Total games</span></p>
        </div>

        <div className="individual-stat">
          <p>1 <span>In progress</span></p>
        </div>

        <div className="individual-stat">
          <p>1 <span>completed</span></p>
        </div>

        <div className="individual-stat">
          <p>2 <span>On the list</span></p>
        </div>

      </section>

      <section className="library-section mt-6">
        <div className="section-heading">

          <div>
            <p>YOUR COLLECTION</p>
            <h2>Game list <span>4</span></h2>
          </div>

          <div className="filters">
            <button className="p-4 bg-red-500 border-2">All games</button>
            <button className="p-4 bg-blue-500 border-2">Playing</button>
            <button className="p-4 bg-green-500 border-2">Beaten</button>
            <button className="p-4 bg-yellow-500 border-2">Backlogged</button>
          </div>

        </div>

        <div className="game-list">

          <div className="game-card mt-6">

            <div className="text-white w-18 h-18 rounded-2xl bg-fuchsia-400 text-xl grid place-items-center">Image</div>
            <div className="game-info">
              <div>Console info goes here <span>||</span> <span>game genre goes here</span></div>
              <h3>Game title goes here</h3>
              <button className="underline">Remove from list</button>
            </div>

            <div className="status-control">
              <p>Status</p>
              <div className="status-options">
                <button>Playing</button>
                <button className="ml-1.5">Beaten</button>
                {/* Need to add the status here. I tried adding a placeholder status dot but the styles don't work when it's display inline but they do work when it's display block. I wonder if it's because the conatiner is to small to hold it. Going to figure it out later when I come back to styling this */}
                <button className="ml-1.5">Backlogged</button>
              </div>
            </div>
           

          </div>

          <div className="game-card mt-6">

            <div className="text-white w-18 h-18 rounded-2xl bg-amber-400 text-xl grid place-items-center">Image</div>
            <div className="game-info">
              <div>Console info goes here <span>||</span> <span>game genre goes here</span></div>
              <h3>Game title goes here</h3>
              <button className="underline">Remove from list</button>
            </div>

            <div className="status-control">
              <p>Status</p>
              <div className="status-options">
                <button>Playing</button>
                <button className="ml-1.5">Beaten</button>
                <button className="ml-1.5">Backlogged</button>
              </div>
            </div>

          </div>

          <div className="game-card mt-6">

            <div className="text-white w-18 h-18 rounded-2xl bg-red-400 text-xl grid place-items-center">Image</div>
            <div className="game-info">
              <div>Console info goes here <span>||</span> <span>game genre goes here</span></div>
              <h3>Game title goes here</h3>
              <button className="underline">Remove from list</button>
            </div>

            <div className="status-control">
              <p>Status</p>
              <div className="status-options">
                <button>Playing</button>
                <button className="ml-1.5">Beaten</button>
                <button className="ml-1.5">Backlogged</button>
              </div>
            </div>

          </div>

          <div className="game-card mt-6">

            <div className="text-white w-18 h-18 rounded-2xl bg-blue-400 text-xl grid place-items-center">Image</div>
            <div className="game-info">
              <div>Console info goes here <span>||</span> <span>game genre goes here</span></div>
              <h3>Game title goes here</h3>
              <button className="underline">Remove from list</button>
            </div>

            <div className="status-control">
              <p>Status</p>
              <div className="status-options">
                <button>Playing</button>
                <button className="ml-1.5">Beaten</button>
                <button className="ml-1.5">Backlogged</button>
              </div>
            </div>

          </div>

        </div>
      </section>

      <footer className ="mt-6">
        <p>BACKLOGGER / 2026</p>
        <p>MADE FOR THE GAMES YOU'LL GET TO EVENTUALLY</p>
      </footer>
      
    </main>
    </div>
    
    
  )
}

export default App
