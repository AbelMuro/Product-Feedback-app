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
                            <Route path='/' element={<SuggestionsPage/>}/>
                            <Route path='/feedback' element={<CreateFeedbackPage/>}/>
                            <Route path='/:post' element={<ViewPost/>}/>
                        </Routes>
                </BrowserRouter>                
        </Provider>
    )
}

export default App;