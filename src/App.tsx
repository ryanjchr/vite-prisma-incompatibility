import "./App.css";

// This import causes SyntaxError: Importing binding name 'UserRole' is not found.
import { UserRole } from "./bug";

// However, when importing directly from @prisma/client, we have no issue
// import { UserRole } from "@prisma/client";

function App() {
  return (
    <div className="App">
      <h1>User roles:</h1>
      <ul>
        <li>{UserRole.ADMIN}</li>
        <li>{UserRole.USER}</li>
      </ul>
    </div>
  );
}

export default App;
