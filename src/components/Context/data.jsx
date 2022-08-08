export const lecture = [
    {
        title: 'Chọn danh mục bài giảng',
        key: '0',
        children: [
            {
                title: 'Lớp 7',
                key: '0-0',
            },
            {
                title: 'Lớp 8',
                key: '0-1',
            },
            {
                title: 'Lớp 9',
                key: '0-2',
            },
        ]
    },
    {
        title: 'Chọn danh mục bài tập lẻ',
        key: '1',
        children: [
            {
                title: 'Lớp 1',
                key: '1-0',
            },
            {
                title: 'Lớp 2',
                key: '1-1',
            },
            {
                title: 'Lớp 3',
                key: '1-2',
            },
            {
                title: 'Lớp 4',
                key: '1-3',
            },
            {
                title: 'Lớp 5',
                key: '1-4',
            },
            {
                title: 'Lớp 6',
                key: '1-5',
            },
        ]
    },
    {
        title: '0-1',
        key: '2',
        children: [
            {
                title: '0-1-0',
                key: '2-0',
            },
            {
                title: '0-1-1',
                key: '2-1',
            },
            {
                title: '0-1-2',
                key: '2-2',
            },
        ],
    },
]

const transform1 = ({ title = '', key = '', children = [] }) =>
    [{ title, key }, ...transformAll(children)] // calls transformAll

const transformAll = (children = []) =>
    children.flatMap(c => transform1(c)) // calls transform1

export const lectures = [...transformAll(lecture)]
