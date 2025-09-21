import React from 'react';

function ContactList({ contacts, onDelete }) {
  return (
    <div className="contact-list">
      <h2>Contacts</h2>
      {contacts.length === 0 ? (
        <p>No contacts found.</p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <li key={contact.id} className="contact-item">
              <div className="contact-info">
                <p><strong>Name:</strong> {contact.name}</p>
                <p><strong>Email:</strong> {contact.email}</p>
                <p><strong>Phone:</strong> {contact.phone}</p>
              </div>
              <button onClick={() => onDelete(contact.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ContactList;
