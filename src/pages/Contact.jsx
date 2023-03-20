
import React, { useState } from 'react';
import * as S from './Contact.Styles';


function Contact() {
  const [formState, setFormState] = useState({
    fullName: '',
    subject: '',
    email: '',
    body: ''
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formState);
  }

  return (
    <div>
      <h2>Contact Us</h2>
      <S.Form onSubmit={handleSubmit}>
        <S.Label htmlFor="fullName">Full Name</S.Label>
        <S.Input
          type="text"
          name="fullName"
          id="fullName"
          value={formState.fullName}
          onChange={handleChange}
          minLength="3"
          required
        />

        <S.Label htmlFor="subject">Subject</S.Label>
        <S.Input
          type="text"
          name="subject"
          id="subject"
          value={formState.subject}
          onChange={handleChange}
          minLength="3"
          required
        />

        <S.Label htmlFor="email">Email</S.Label>
        <S.Input
          type="email"
          name="email"
          id="email"
          value={formState.email}
          onChange={handleChange}
          required
        />

        <S.Label htmlFor="body">Message</S.Label>
        <S.TextArea
          name="body"
          id="body"
          value={formState.body}
          onChange={handleChange}
          minLength="3"
          required
        ></S.TextArea>

        <S.Button type="submit">Submit</S.Button>
      </S.Form>
    </div>
  );
}

export default Contact;