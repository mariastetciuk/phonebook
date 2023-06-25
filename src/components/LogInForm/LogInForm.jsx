import { useDispatch } from 'react-redux';
import { loginThunk } from 'redux/AuthSlice/operations';

const LogInForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = event => {
    event.preventDefault();

    const user = {
      email: event.target.elements.email.value,
      password: event.target.elements.password.value,
    };

    dispatch(loginThunk(user));

    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit">Sing in</button>
    </form>
  );
};
export default LogInForm;
