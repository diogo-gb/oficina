import home from "./pages/home/home"

import {BrowserRoutes, Routes, Route} from 'react-route'

function App(){
    return(
        <div className="centraliza">
            <BrowserRoutes>
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            </BrowserRoutes>
        </div>
    )
}