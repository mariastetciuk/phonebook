import css from './Home.module.css';

const Home = () => {
  return (
    <>
      <h1 className={css.title}>Welcome to your Phonebook</h1>
      <p className={css.text}>
        Here you can save contacts of people you don't want to lose. To start
        using the application, you need to go to your personal account.
      </p>
    </>
  );
};

export default Home;
