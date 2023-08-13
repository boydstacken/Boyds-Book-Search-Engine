import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar';
import { LOGIN_USER, ADD_USER, SAVE_BOOK, REMOVE_BOOK } from './mutations'
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default App;
