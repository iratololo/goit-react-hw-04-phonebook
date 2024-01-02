import { useState, useEffect, createContext } from "react"
import { nanoid } from 'nanoid';
import { Report } from 'notiflix/build/notiflix-report-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { Container } from "./components/Container/Container";
import { ContactForm } from "./components/ContactForm/ContactForm"
import { Filter } from "./components/Filter/Filter"
import { ContactList } from "./components/ContactList/ContactList"

import data from './data.json'

export const MyContext = createContext();


export const App = () => {
  const [contacts, setContacts] = useState(data);
  const [filter, setFilter] = useState("")

  useEffect(() => {
    const localContacts = localStorage.getItem("contacts");
    if (localContacts&&JSON.parse(localContacts).length>0) {
      setContacts(JSON.parse(localContacts))
    }
  }, [])
  
  useEffect(() => {
    localStorage.setItem("contacts", JSON.stringify(contacts));
  },[contacts])


  const createContact = (data) => {
    const contact = {
      ...data,
      id: nanoid(),
    }

    const twin = contacts.find(({ name }) => name.toLowerCase() === data.name.toLowerCase());
    if (twin) {
      Report.failure(
        'error',
        'There is already a contact with this name',
        'Okay',
      );
      return;
    } else {
      setContacts((prev) => [...prev, contact])
      Notify.success('A new contact is created');
    }
  }

  const deleteContact = (data) => {
    setContacts((prev) => {
      return prev.filter(({ id }) => id !== data)
    })
  }

  const changeFilter = (val) => {
    setFilter(val)
  }

  const foundContact = contacts.filter(({ name }) => name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <MyContext.Provider value={{foundContact,filter,createContact,changeFilter,deleteContact}}>
      <Container>
        <h1>Phonebook</h1>
        <ContactForm/>
        <h2>Contacts</h2>
        <Filter/>
        <ContactList/>
      </Container>
    </MyContext.Provider>
    )
}


