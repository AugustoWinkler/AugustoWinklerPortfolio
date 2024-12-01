import './App.css'
import React, { useEffect } from 'react';
import Introduction from './components/Introduction'
import FloatingBar from './components/FloatingBar'
import Projects from './components/Projects'
import FormSubmit from './components/Form'

function App() {
  
  useEffect(() => {
    console.log(`
                      .::.
                  .:'  .:
        ,MMM8&&&.:'   .:'
       MMMMM88&&&&  .:'
      MMMMM88&&&&&&:'
      MMMMM88&&&&&&
    .:MMMMM88&&&&&&
  .:'  MMMMM88&&&&
.:'   .:'MMM8&&&'
:'  .:'
'::'  
        Hello Dev!
    `);
  }, []);

  return (
    <>
      <FloatingBar/>
      <Introduction/>
      <Projects/>
      <FormSubmit/>
    </>
  )
}

export default App;
