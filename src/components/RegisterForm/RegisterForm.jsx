import { useDispatch } from 'react-redux';
import { registeringThunk } from 'redux/AuthSlice/operations';

const RegisterForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    const newUser = {
      name: event.target.elements.name.value,
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    dispatch(registeringThunk(newUser));

    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="name"
          placeholder="Your name"
          required
          pattern="^[a-zA-Z]+\s[a-zA-Z]+$"
          title="Username must be two words separated by space."
        />
      </label>
      <br />
      <br />
      <label>
        <input type="email" name="email" placeholder="Email" required />
      </label>
      <br />
      <br />
      <label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          minLength="8"
          title="Password must be thirteen symbols."
        />
      </label>
      <br />
      <br />
      <button type="submit">Sing up</button>
    </form>
  );
};

export default RegisterForm;
