import React, { useState, useContext } from 'react';
import './SelectCss.css';
import { Tree } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { Provider } from '../../Context/Context';
import { lecture } from '../../Context/data';
const Select = () => {
    const { checkedKeys, setCheckedKeys } = useContext(Provider);
    const [expandedKeys, setExpandedKeys] = useState([]);
    const [selectedKeys, setSelectedKeys] = useState([]);
    const [autoExpandParent, setAutoExpandParent] = useState(true);

    const onExpand = (expandedKeysValue) => {
        setExpandedKeys(expandedKeysValue);
        setAutoExpandParent(false);
    };

    const onCheck = (checkedKeysValue) => {
        console.log('onCheck', checkedKeysValue);
        setCheckedKeys(checkedKeysValue);
    };

    const onSelect = (selectedKeysValue, info) => {
        console.log('onSelect', info);
        setSelectedKeys(selectedKeysValue);
    };

    return (
        <div>
            <div className='mainTitle'>
                <p className='title'>Chọn danh mục bài giảng</p>
                <p>Tick chọn môn phụ trách</p>

            </div>
            <div className='option'>
                <form action="">
                    <input type="search" />
                    <button><SearchOutlined /></button>
                </form>
                <Tree
                    checkable
                    onExpand={onExpand}
                    expandedKeys={expandedKeys}
                    autoExpandParent={autoExpandParent}
                    onCheck={onCheck}
                    checkedKeys={checkedKeys}
                    onSelect={onSelect}
                    selectedKeys={selectedKeys}
                    treeData={lecture}
                />
            </div>
        </div>
    )
}

export default Select