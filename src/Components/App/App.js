import React from 'react';
import SuggestionsPage from './SuggestionsPage'
import CreateFeedbackPage from './CreateFeedbackPage';
import EditFeedbackPage from './EditFeedbackPage';
import ViewPost from './ViewPost';
import RoadMapPage from './RoadMapPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Store from './Store';
import {Provider} from 'react-redux';
import './styles.css';


function App() {    


    return(
        <Provider store={Store}>
                <BrowserRouter>
                        <Routes>    
                            <Route path='/' element={<SuggestionsPage/>}/>
                            <Route path='/feedback' element={<CreateFeedbackPage/>}/>
                            <Route path='/edit' element={<EditFeedbackPage/>}/>
                            <Route path='/:post' element={<ViewPost/>}/>
                            <Route path='/roadmap' element={<RoadMapPage/>}/>
                        </Routes>
                </BrowserRouter>                
        </Provider>
    )
}

export default App;