import React, { useState } from 'react';

export const Provider = React.createContext();

const Context = ({ children }) => {
    const [checkedKeys, setCheckedKeys] = useState(['0-0', '0-2']);
    // const [newCheckedKeys, setNewCheckedKeys] = useState([])
    // console.log(newCheckedKeys)
    const data = { checkedKeys, setCheckedKeys}
    return (
        <Provider.Provider value={data}>
            {children}
        </Provider.Provider>
    )
}

export default Context