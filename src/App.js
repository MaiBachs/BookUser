import './App.css';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Page/Home/Home.jsx';
import DetailBook from './Page/DetailBook/DetailBook.jsx';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/home" element={<Home />}></Route>
                        <Route path="/detailbook" element={<DetailBook />}></Route>

                        <Route path="*" element={<Navigate to="/home" />}></Route>
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
