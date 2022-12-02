import { RegisterForm } from "./components/RegisterForm";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello Ariakit</h1>
      <p>
        <a href="https://ariakit.org/">Go to the official Ariakit website</a>
      </p>

      <hr />

      <h2>Test</h2>
      <RegisterForm />
    </div>
  );
}
