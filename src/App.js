import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/HeaderDisplay/Header'
import AddPaper from './components/Add/AddPaper'
import ContactList from './components/ListDisplay/ContactList'
import SwitchSort from './components/SwitchSort'
import { saveAs } from 'file-saver'

import SyncStore from './SyncStore'


function App() {
  const [state, setState] = useState({
    contacts: localStorage.data ? JSON.parse(localStorage.data) : [],
    isSearch: false,
    isSort: true,
    search: []
  })

  const handleDelete = index => {
    setState(state => { 
      SyncStore(state.contacts.filter((_, i) => i === index ? false : true))
      return {
        contacts: state.contacts.filter((_, i) => i === index ? false : true),
        search: state.search,
        isSort: state.isSort,
        isSearch: state.isSearch
      }
    })
  }

  const handleSearch = searchTerm => {
      console.log(searchTerm)
      setState(state => {
          return {
            contacts: state.contacts,
            isSearch: true,
            search: state.contacts.filter(e => e.name.toLowerCase() === searchTerm.toLowerCase()),
            isSort: state.isSort
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
          search: state.search,
          isSort: state.isSort
        }
      })
      SyncStore(state.contacts)
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
        SyncStore(res)
        return {
          contacts: res,
          isSearch: state.isSearch,
          search: state.search,
          isSort: state.isSort
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
        SyncStore(res)
        return {
          contacts: res,
          isSearch: state.isSearch,
          search: state.search,
          isSort: state.isSort
        }
      })
      SyncStore(state.contacts)
    }
  }

  const handleAdd = (name, number) => {
    if (name.trim() && number.trim()) {
      setState(state => {
        state.contacts.push({name: name, number: number, updDate: undefined})
        return {
        contacts: state.contacts,
        isSearch: state.isSearch,
        search: state.search,
        isSort: state.isSort
      }})
      SyncStore(state.contacts)
    }
  }

  const handleImport = (json) => {
    console.log('import')
    // console.log(JSON.parse(json)
    setState(state => {
      json.forEach((el, id) => {
        state.contacts.push(json[id])
      })
      return {
        contacts: state.contacts,
        isSearch: state.isSearch,
        search: state.search,
        isSort: state.isSort
      }
    })
    SyncStore(state.contacts)
  }

  const handleExport = () => {
    const collection = JSON.stringify(state.contacts)
    console.log(collection)
    let blob = new File([collection], {type: 'text/json;charset=utf-8'})
    saveAs(blob, 'contacts' + ' ' + Date.now() + '.json')
  }

  const handleChangeSort = (bool) => {
    setState(state => ({
      contacts: state.contacts,
      isSearch: state.isSearch,
      isSort: bool,
      search: state.search
    }))
  }

  return (
    <div className="App">
      <Header import={handleImport} export={handleExport} search={handleSearch} />
      <AddPaper handleAdd={handleAdd} />
      <ContactList isSort={state.isSort} change={handleChange} delete={handleDelete} data={state}/>
      <SwitchSort isSort={state.isSort} changeSort={handleChangeSort}/>
    </div>
  );
}

export default App;
