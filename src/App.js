import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  const {loading, data} = useFetch();
  const [page, setPage] = useState(0);
  const [currentFollowers, setCurrentFollowers] = useState([]);

  useEffect(() => {
    if(!loading && data) setCurrentFollowers(data[page]);
  }, [page, loading, data]);

  if(loading) return 'loading...';

  return (
    <main>
      <div className="section-title">
        <h1>Pagination</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
        {
          currentFollowers.map(follower => (
            <Follower key={follower.id} data={follower}/>
          ))
        }
        </div>
        <div className="btn-container">
          <button 
            onClick={() => page !== 0 && setPage(state => state - 1)} 
            className="prev-btn"
            style={page === 0 ? {opacity: 0.5} : {}}
            disabled={page === 0}
          >Prev</button>
          {data.map((_, index) => (
            <button
              key={`pageButton${index + 1}`} 
              className={`page-btn ${page === index ? 'active-btn' : ''}`}
              onClick={() => setPage(index)}
            >{index + 1}</button>
          ))}
          <button 
            onClick={() => (page !== data.length - 1) && setPage(state => state + 1)} 
            className="next-btn"
            style={(page === data.length - 1) ? {opacity: 0.5} : {}}
            disabled={page === data.length - 1}
          >Next</button>
        </div>
      </section>
      <footer>
        <div style={{textAlign: 'center', margin: '40px auto', fontSize: '1.5rem'}}>
          <h6>Startup Project Provided By: <a href="https://github.com/john-smilga">https://github.com/john-smilga</a></h6>
          <h6>React Application Developed By: <a href="https://brant.work">Brant D. Messenger</a></h6>
        </div>
      </footer>
    </main>
  );
}

export default App
