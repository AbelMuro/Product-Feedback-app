import React from 'react';
import SuggestionsPage from './SuggestionsPage'
import CreateFeedbackPage from './CreateFeedbackPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux';
import Store from './Store';
import './styles.css';

function App() {
    return(
        <Provider store={Store}>
            <BrowserRouter>
                    <Routes>    
                        <Route path='/' element={<SuggestionsPage/>}/>
                        <Route path='/feedback' element={<CreateFeedbackPage/>}/>
                    </Routes>
            </BrowserRouter>            
        </Provider>

    )
}

export default App;