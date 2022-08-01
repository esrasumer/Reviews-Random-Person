import React from 'react'
import Reviews from './componets/Reviews'
function App() {
  return (
    <main>
      <section className='container'>
        <div className='title'>
          <h2>our rewiews</h2>
          <div className="underline"></div>
        </div>
      <Reviews />
      </section>
    </main>
  );
}

export default App;
