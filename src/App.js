import { Route, Routes } from 'react-router-dom';
import Home from './Components/Pages/Home/Home/Home';
import SuingUp from './Components/Pages/SuingUp/SuingUp';

function App() {
  return (
    <>
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/suingUp" element={<SuingUp />} />
      </Routes>
    </>
  );
}

export default App;
