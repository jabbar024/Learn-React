import React, { useState } from 'react'
import PropsTask2Child from './PropsTask2Child'

const PropTask2 = () => 
{

  let [state, setState] = useState(0) ;

  return (
    <div>
       <PropsTask2Child props = {{state, setState}} />
    </div>
  )
}

export default PropTask2
 