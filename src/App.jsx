import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  // const handleChange = (evt) => {
  //   setFilterValue(evt.target.value);
  // };

  // const searchValue = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filterValue.toLowerCase())
  // );

  return (
    <>
      <h1>PhoneBook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}

export default App;
