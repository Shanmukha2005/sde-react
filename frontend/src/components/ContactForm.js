import React, { useState } from 'react';

function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!name.trim()) newErrors.name = 'Name is required.';
    if (!/^\S+@\S+\.\S+$/.test(email)) newErrors.email = 'Invalid email format.';
    if (!/^\d{10}$/.test(phone)) newErrors.phone = 'Phone must be 10 digits.';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit({ name, email, phone });
      setName('');
      setEmail('');
      setPhone('');
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
      {errors.name && <p className="error">{errors.name}</p>}
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {errors.email && <p className="error">{errors.email}</p>}
      <input type="tel" placeholder="Phone (10 digits)" value={phone} onChange={(e) => setPhone(e.target.value)} />
      {errors.phone && <p className="error">{errors.phone}</p>}
      <button type="submit">Add Contact</button>
    </form>
  );
}

export default ContactForm;
