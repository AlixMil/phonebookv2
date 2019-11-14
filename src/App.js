import React, { useState } from 'react';
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
    search: [],
    sort: [],
    isSearch: false,
    isSort: localStorage.isSort ? JSON.parse(localStorage.isSort) : false 
  })

  const handleDelete = index => {
    setState(state => { 
      SyncStore(state.contacts.filter((_, i) => i === index ? false : true))
      return {
        contacts: state.contacts.filter((_, i) => i === index ? false : true),
        search: state.search,
        sort: state.sort,
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
        const res = state.contacts.map(( { name, number } , id) => {
          if (id === index) {
            return {
              name: nameInp[0].toUpperCase() + nameInp.slice(1),
              number: numberInp[0].toUpperCase() + numberInp.slice(1),
              // updDate: new Date()
            }
          }
          return {
              name: name,
              number: number,
              // updDate: new Date()
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
        const res = state.contacts.map(( { name, number } , id) => {
          if (id === index) {
            return {
              name: nameInp[0].toUpperCase() + nameInp.slice(1),
              number: number,
              // updDate: new Date()
            }
          }
          return {
              name: name,
              number: number,
              // updDate: new Date()
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
        const res = state.contacts.map(( { name, number } , id) => {
          if (id === index) {
            return {
              name: name,
              number:  numberInp[0].toUpperCase() + numberInp.slice(1),
              // updDate: new Date() 
            }
          }
          return {
              name: name,
              number: number,
              // updDate: new Date()
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
        state.contacts.push({name: name, number: number, created: Date.now().toString()})
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
    setState(state => {
      json.forEach((el, id) => {
        el.created = Date.now().toString()
        state.contacts.push(json[id])
      })
      return {
        contacts: state.contacts,
        isSearch: state.isSearch,
        search: state.search,
        sort: state.sort,
        isSort: state.isSort
      }
    })
    SyncStore(state.contacts)
  }

  const handleExport = () => {
    const collection = JSON.stringify(state.contacts)
    console.log(collection)
    let blob = new File([collection], {type: 'text/json;charset=utf-8'})
    saveAs(blob, 'contacts ' + Date.now() + '.json')
  }

  const handleChangeSort = (bool) => {
    setState(prevState => {
      const sortingState = prevState.contacts.slice(0)
      localStorage.isSort = JSON.stringify(bool)
      return {
        contacts: prevState.contacts,
        isSearch: prevState.isSearch,
        sort: sortingState.sort((a, b) => a.name < b.name ? -1 : 1),
        isSort: bool,
        search: prevState.search
      }})
  }

  return (
    <div className="App">
      <Header import={handleImport} export={handleExport} search={handleSearch} />
      <AddPaper handleAdd={handleAdd} />
      <ContactList isSort={state.isSort} change={handleChange} delete={handleDelete} data={state}/>
      <SwitchSort isShow={state.contacts.length} isSort={state.isSort} changeSort={handleChangeSort}/>
    </div>
  );
}

export default App;
