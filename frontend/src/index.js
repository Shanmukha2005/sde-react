import React, { useState, useEffect } from 'react';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Pagination from './components/Pagination';
import './styles/App.css'; 

const API_URL = 'http://localhost:5000/contacts';

function App() {
  const [contacts, setContacts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const contactsPerPage = 10;

  const fetchContacts = async (page) => {
    try {
      const response = await fetch(`${API_URL}?page=${page}&limit=${contactsPerPage}`);
      const data = await response.json();
      setContacts(data.contacts);
      setTotalPages(Math.ceil(data.total / contactsPerPage));
    } catch (error) {
      console.error('Failed to fetch contacts:', error);
    }
  };

  useEffect(() => {
    fetchContacts(currentPage);
  }, [currentPage]);

  const handleAddContact = async (contact) => {
    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(contact),
      });
      if (response.ok) {
        fetchContacts(currentPage);
      }
    } catch (error) {
      console.error('Failed to add contact:', error);
    }
  };

  const handleDeleteContact = async (id) => {
    try {
      const response = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        fetchContacts(currentPage);
      }
    } catch (error) {
      console.error('Failed to delete contact:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Contact Book</h1>
      <ContactForm onSubmit={handleAddContact} />
      <ContactList contacts={contacts} onDelete={handleDeleteContact} />
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
}

export default App;
