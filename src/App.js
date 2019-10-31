import React, { useState } from 'react';
import './App.css';
import Header from './components/HeaderDisplay/Header'
import AddPaper from './components/Add/AddPaper'
import ContactList from './components/ListDisplay/ContactList'


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
        name: 'Nastin',
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
    isOpenAdd: false,
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

  const handleChange = (index, nameInp, numberInp) => {
    if (nameInp && numberInp) {
      setState(state => {
        const res = state.contacts.map(( { name, number, updDate } , id) => {
          if (id === index) {
            return {
              name: nameInp[0].toUpperCase() + nameInp.slice(1),
              number: numberInp[0].toUpperCase() + numberInp.slice(1),
              updDate: new Date()
            }
          }
          return {
              name: name,
              number: number,
              updDate: new Date()
          }
        })
        return {
          contacts: res,
          isSearch: state.isSearch,
          search: state.search
        }
      })
    } else if (nameInp) {
      setState(state => {
        const res = state.contacts.map(( { name, number, updDate } , id) => {
          if (id === index) {
            return {
              name: nameInp[0].toUpperCase() + nameInp.slice(1),
              number: number,
              updDate: new Date()
            }
          }
          return {
              name: name,
              number: number,
              updDate: new Date()
          }
        })
        return {
          contacts: res,
          isSearch: state.isSearch,
          search: state.search
        }
      })
    } else if (numberInp) {
      setState(state => {
        const res = state.contacts.map(( { name, number, updDate } , id) => {
          if (id === index) {
            return {
              name: name,
              number:  numberInp[0].toUpperCase() + numberInp.slice(1),
              updDate: new Date()
            }
          }
          return {
              name: name,
              number: number,
              updDate: new Date()
          }
        })
        return {
          contacts: res,
          isSearch: state.isSearch,
          search: state.search
        }
      })
    }
    
  }

  const handleAdd = (name, number) => {
    if (name.trim() && number.trim()) {
      setState(state => {
        state.contacts.push({name: name, number: number, updDate: undefined}) 
        return {
        contacts: state.contacts,
        isSearch: state.isSearch,
        search: state.search
      }})
    }
  }

  return (
    <div className="App">
      <Header search={handleSearch} />
      <AddPaper handleAdd={handleAdd} />
      <ContactList change={handleChange} delete={handleDelete} data={state}/>
    </div>
  );
}

export default App;
