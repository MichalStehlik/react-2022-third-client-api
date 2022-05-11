import {useState} from "react";
import './App.css';
import DatePicker from "./components/DatePicker";
import List from "./components/List";

function App() {
  const [date, setDate] = useState(new Date());
  return (
    <div className="App">
      <DatePicker date={date} setDateAction={setDate} />
      <List date={date} />
    </div>
  );
}

export default App;
