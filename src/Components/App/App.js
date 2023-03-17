import React from 'react';
import SuggestionsPage from './SuggestionsPage'
import CreateFeedbackPage from './CreateFeedbackPage';
import ViewPost from './ViewPost';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Store from './Store';
import {Provider} from 'react-redux';
import {auth, db} from './Firebase';
import './styles.css';



function App() {    
    return(
        <Provider store={Store}>
                <BrowserRouter>
                        <Routes>    
                            <Route path='/' element={<SuggestionsPage db={db}/>}/>
                            <Route path='/feedback' element={<CreateFeedbackPage db={db}/>}/>
                            <Route path='/:post' element={<ViewPost db={db}/>}/>
                        </Routes>
                </BrowserRouter>                
        </Provider>
    )
}

export default App;