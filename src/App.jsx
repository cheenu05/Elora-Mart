import React from 'react'
import { useState } from 'react';
import LoadingAnimation from './Components/LoadingAnimation.jsx';
import Render from './Render.jsx';



const App = () => {

  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <LoadingAnimation onFinish={() => setLoading(false)} />
      ) : (
        <Render />
      )}



    </>
  )
}

export default App
