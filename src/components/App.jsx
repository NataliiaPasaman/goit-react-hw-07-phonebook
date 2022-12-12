import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from "react-redux";
import { selectIsLoading, selectError } from 'redux/selector';
import { ContactForm } from './ContactForm/ContactForm';
import { Filter } from './Filter/Filter';
import { ContactsList } from './ContactsList/ContactsList';
import { Loader } from './Loader/Loader';

export const App = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch])

  return (
    <div
      style={{
        height: '100vh',
        padding: '40px',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {isLoading && !error && <Loader />}
      {!isLoading && !error && <ContactsList />}
    </div>
  );
};
