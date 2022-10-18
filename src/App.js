import './App.css';
import QrReader from "react-qr-scanner";

function App() {
  return (
    <div className="App">
      <QrReader
        delay={300}
        onError={console.error}
        onScan={param => console.log(param)}
        constraints={{ video: { facingMode: "environment" } }}
        style={{ width: "100%" }}
      />
    </div>
  );
}

export default App;
