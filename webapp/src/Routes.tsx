import {
    Route,
    BrowserRouter,
    Routes as RoutesContainer
} from "react-router-dom";

import Home from "./views/Home"
import NewSolicitation from "./views/NewSolicitation"
import Solicitations from "./views/Solicitations";


export default function Routes(){

    return(

        <BrowserRouter>
            <RoutesContainer>
                <Route path="/" element={<Home/>}/>
                <Route path="/newSolicitation" element={<NewSolicitation/>}/>
                <Route path="/solicitations" element={<Solicitations/>}/>
            </RoutesContainer>
        </BrowserRouter>
    )
}