import React from 'react';
import { Wrapper } from 'bushido-strap'

import './App.scss';
import Video from './components/Video'
import AnimateText from './components/AnimateText'
import Footer from './components/Footer'
function App() {
  return (
   <div className ='App'>
     <Wrapper>
     <AnimateText/>
   
     
       <Video/>
     
     </Wrapper>
     <Footer/>
     
  
     
     </div>
  );
}

export default App;
