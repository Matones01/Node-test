// App.js
import { useState } from 'react';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import Testpage from './pages/test';

function App() {

  const [page, setPage] = useState('home');

  // TODO: How does the Layout component know which page to render?
  // The Layout component uses the base layout as seen in layout.jsx and checks the keyword given. 
  //The component renders the corrosponding page depending on the keyword.


  return (
    <Layout selectedPage={page} onSetPage={setPage}>

      {page === 'home' && <HomePage />}
      {page === 'about' && <AboutPage />}
      {page === 'contact' && <ContactPage />}
      {page === 'test' && <Testpage />}

    </Layout>
  );
}

export default App;
