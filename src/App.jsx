import './App.css'

function App() {
  

  return (
    <div className="max-w-6xl my-0 mx-auto pl-6 pr-6 "> {/* 
        .container {
          max-width: 1160px;
          margin: 0 auto;
          padding: 0 24px;
          box-sizing: border-box; /* Crucial to keep padding inside the width calculation 
        } 
          This is what this divs code is based on. This is how it's written in vanilla css
      */ }
    
    <header className="text-center">
      {/* Kind of got something going with using grid to center the logo but now the line at the bottom of the header is taking up the whole width of the browser. Need to figure out how to get to be centered and smaller like the design. Also I need to write all the JSX first for the app before I start styling  */}
      <div>
        <h1><span className="mr-2.5">B</span>backlogger</h1>
      </div>
    </header>

    <main > 
      <section className="hero"> 

        <div className="personal-logo">
          <div className="circle">
          </div>
          <p>your personal library</p>
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
