import React from 'react';
import Select from './select/Select';
import List from './list/List';

const Lecture = () => {
    const style = {
        display: 'flex',
        justifyContent: 'space-around',
        border:'1px solid black',
    }
    const style1 = {
        width: '25%',
    }
    const style2 = {
        width: '65%',
    }
    return (
        <div style={style}>
            <div style={style1}>
                <Select />
            </div>
            <div style={style2}>
                <List />
            </div>
        </div>
    )
}

export default Lecture