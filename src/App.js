import React from 'react'
import DisplayMyName from './DisplayName'
import DisplayNames from './DisplayNames'

const App = () => (
  <div>
    <h1>Hello World!</h1>
    <DisplayMyName/>
    <DisplayNames
      name='Krystian'
    />
  </div>
)

export default App