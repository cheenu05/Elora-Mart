import React from 'react'
import { useState } from 'react';
import LoadingAnimation from './Components/LoadingAnimation.jsx';
import Home from './Components/Home.jsx';

const App = () => {

  const [loading, setLoading] = useState(true);

  return (
    <>
       {loading ? (
        <LoadingAnimation onFinish={() => setLoading(false)} />
      ) : (
        <Home />
      )}

    </>
  )
}

export default App
