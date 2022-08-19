import './App.css';
import Hero from "./page/Hero";
import SecondPage from "./page/SecondPage";
import {Route, Routes} from "react-router-dom";

function App() {
    return (
        <div className={'App'}>
            <Routes>
                <Route path={'/'} element={<Hero/>}/>
                <Route path={'/secondpage'} element={<SecondPage/>}/>
            </Routes>
            {/*<Hero/>*/}
            {/*<SecondPage/>*/}
        </div>
    );
}

export default App;
