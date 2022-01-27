// Hoofd modules
import * as React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

// Components
import HelloPerson from './components/HelloPerson'
import Counter from "./components/Counter"
import Fetch from "./components/Fetch"

ReactDOM.render(
    <div>
        <h1>Dit is voor de beste workshop</h1>
        <BrowserRouter>
            <nav>
                <ul>
                    <li><Link to={"/"}>Greeting</Link></li>
                    <li><Link to={"/fetch"}>Fetch</Link></li>
                    <li><Link to={"/counter"}>Counter</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path={"/"} element={<HelloPerson name={"Steven"} age={6} />} />
                <Route path={"/counter"} element={<Counter />} />
                <Route path={"/fetch"} element={<Fetch />} />
            </Routes>
        </BrowserRouter>
    </div>
, document.getElementById("app"))