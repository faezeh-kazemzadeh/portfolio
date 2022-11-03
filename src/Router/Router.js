import React from 'react';
import { Route , Routes} from 'react-router-dom';
import About from '../Components/About/About';
import Skills from '../Components/Skills/Skills';
import Works from '../Components/Works/Works';


const Router = () => {
    return (
        <div>
            <Routes>
            <Route path='#' element={< Skills />} />
            <Route path='/#about' element={< About />} />
            <Route path='/#works' element={< Works />} />
            </Routes>
        </div>
    );
};

export default Router;