import React, { useState } from 'react';
import './App.css';
import Header from './components/Header'
import ContactList from './components/ContactList'

function App() {
  const [state, setState] = useState({
      contacts: [
      {
        name: 'Alex',
        number: '89771337044',
        updDate: undefined
      },
      {
        name: 'Herson',
        number: '89771743167',
        updDate: undefined
      },
      {
        name: 'Rendy',
        number: '89771337044',
        updDate: undefined
      },
      {
        name: 'Karlsen',
        number: '89771743167',
        updDate: undefined
      },
      {
        name: 'Kristi',
        number: '89771337044',
        updDate: undefined
      },
      {
        name: 'Kolin',
        number: '89771743167',
        updDate: undefined
      }
    ],
    isSearch: false,
    search: []})

  const handleDelete = index => {
    setState(state => { 
      return {contacts: state.contacts.filter((_, i) => i === index ? false : true),
      search: state.search}
    })
  }

  const handleSearch = searchTerm => {
      console.log(searchTerm)
      setState(state => {
          return {
            contacts: state.contacts,
            isSearch: true,
            search: state.contacts.filter(e => e.name.toLowerCase() === searchTerm.toLowerCase())
          }
      })
  }

  return (
    <div className="App">
      <Header search={handleSearch} />
      <ContactList delete={handleDelete} data={state}/>
    </div>
  );
}

export default App;
