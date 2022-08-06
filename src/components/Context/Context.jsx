import React, { useState } from 'react';

export const Provider = React.createContext();

const Context = ({ children }) => {
    const [checkedKeys, setCheckedKeys] = useState([]);

    const data = { checkedKeys, setCheckedKeys }
    return (
        <Provider.Provider value={data}>
            {children}
        </Provider.Provider>
    )
}

export default Context