import React, { useContext } from 'react';
import './ListCss.css';
import { Provider } from '../../Context/Context';
import { lectures } from '../../Context/data';

const List = () => {
  const { checkedKeys, setCheckedKeys } = useContext(Provider);
  checkedKeys.sort();
  /**
   * 00 000 001 01 010 011
   * [00]
   * [000, 00]
   * [000, 001, 00]
   * [000, 001, 01]
   * [000, 001, 010, 01]
   * [000, 001, 010, 011, 01]
   */
  const a = checkedKeys.reduce((array, pre, index) => {
    if (pre.length > array[array.length - 1].length) {
      const x = array.pop()
      array.push(pre);
      array.push(x);
    } else {
      array.pop();
      array.push(pre);
    }
    return array;
  }, ['0']);
  a.pop()

  const Delete = (value) => {
    const newArray = checkedKeys.filter((list) => {
      return list !== value.slice(0, list.length)
    })
    setCheckedKeys(newArray)
  }
  return (
    <div className='List'>
      <div className='save'>
        <p>Các môn đã chọn</p>
        <button>Lưu</button>
      </div>
      <div className='listOption'>
        {
          a.map((list, index) => {
            // const mx = lectures.find(a => a.key === list.slice('-')[0])
            // console.log(mx)
            const x = lectures.find(a => a.key === list)
            return (
              <div className='lo_option' key={index}>
                <p>{`${x.title}`}</p>
                <div onClick={() => Delete(list)}>x</div>
              </div>
            );
          })
        }
      </div>
    </div>
  )
}

export default List