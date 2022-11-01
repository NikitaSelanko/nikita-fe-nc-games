import './App.css';
import Header from './components/Header';
import AllReviews from './components/AllReviews';

function App() {
  return (
  <div>
      <Header />
      <main className='MainSection'>
      <AllReviews />
      </main>
  </div>
  );
}



export default App;
