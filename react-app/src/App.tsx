import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisibe, setAlertVisibe] = useState(false);
  return (
    <div>
      {alertVisibe && (
        <Alert onClose={() => setAlertVisibe(false)}>My Alert</Alert>
      )}

      <Button
        children="Alert Button"
        color="danger"
        onClick={() => setAlertVisibe(true)}
      />
    </div>
  );
}

export default App;
