import React, { useContext } from 'react';
import './ListCss.css';
import { Provider } from '../../Context/Context';

const List = () => {
  const { checkedKeys, setCheckedKeys } = useContext(Provider);
  console.log(checkedKeys)
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
          checkedKeys.map((list, index) => {
            return (
              <div className='lo_option' key={index}>
                <p>{list}</p>
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