import React, { useState } from 'react'

export const NewComponent = () => {
    const [state, setState] = useState(0);
    return (
        <div onClick={setState(state + 1)}>{state}</div>
    )
}
