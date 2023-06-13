import Sidebar from "./components/Sidebar";
import Products from "./components/Products";
import {Routes, Route} from 'react-router-dom';
import Add from "./components/Add";
import View from "./components/View";
import Edit from "./components/Edit";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <div style={{padding:"20px 20px 20px 220px"}}>
        <Routes>
          <Route path="/" element={<Products/>} />
          <Route path="Products" element={<Products/>} />
          <Route path="Products/:pId" element={<View/>} />
          <Route path="Products/add" element={<Add/>} />
          <Route path="Products/edit/:pId" element={<Edit/>} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
