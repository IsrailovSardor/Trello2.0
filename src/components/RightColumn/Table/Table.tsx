import { DragEvent, FormEvent, useState } from 'react'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import TableViewIcon from '@mui/icons-material/TableView';
import { AddTask, BoxAddTask, BoxItem, BoxTable, CreateTask, StyleCloseIcon, TitleElem } from './TableStyle';

interface Item {
    id: number,
    title: string,
}
interface Items {
    id: number,
    title: string,
    items: Item[]
}






export const Table = () => {
    const [boards, setBoards] = useState<Items[]>([
        {
            id: 1,
            title: "Сделать1",
            items: [
                { id: 1, title: "!1111111" },
                { id: 2, title: "!@@@@@@@" }
            ]
        },
        {
            id: 2, title: "Сделать2",
            items: [
                { id: 3, title: "########" },
            ]
        },
        {
            id: 3, title: "Сделать3",
            items: [
                { id: 5, title: "^^^^^^^" },
                { id: 6, title: "&&&&&&&" },
                { id: 7, title: '*******' }
            ]
        },
        {
            id: 4, title: "Сделать4",
            items: [
                { id: 8, title: "4########" },
            ]
        },
        {
            id: 5, title: "Сделать5",
            items: [
                { id: 15, title: "15^^^^^^^" },
                { id: 16, title: "16&&&&&&&" },
                { id: 17, title: '17*******' }
            ]
        }
    ])

    const [currentBoard, setCurrentBoard] = useState<any>()
    const [currentItem, setCurrentItem] = useState<any>()

    function dragOverHandler(e: any) {
        e.preventDefault()
        if (e.target.className == 'item') {
            e.target.style.boxShadow = '0 4px 3px gray'
        }
    }

    function dragLeaveHandler(e: any): void {
        e.target.style.boxShadow = 'none'
    }
    function dragStartHandler(e: any, board: Items, item: Item) {
        setCurrentBoard(board)
        setCurrentItem(item)
    }

    function dragEndHandler(e: any) {
        e.target.style.boxShadow = 'none'
    }

    function dropHandler(e: any, board: Items, item: Item) {
        e.preventDefault()
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        const dropIndex = board.items.indexOf(item)
        board.items.splice(dropIndex + 1, 0, currentItem)
        setBoards(boards.map((b: any) => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }

    function dropCardHandler(e: any, board: Items) {
        board.items.push(currentItem)
        const currentIndex = currentBoard.items.indexOf(currentItem)
        currentBoard.items.splice(currentIndex, 1)
        setBoards(boards.map((b: any) => {
            if (b.id === board.id) {
                return board
            }
            if (b.id === currentBoard.id) {
                return currentBoard
            }
            return b
        }))
    }
    return (
        <BoxTable>
            {boards.map((board, index) =>
                <BoxItem
                    key={index}
                    onDragOver={(e) => dragOverHandler(e)}
                    onDrop={(e) => dropCardHandler(e, board)}
                >
                    <TitleElem>
                        <p>{board.title}</p>
                        <MoreHorizIcon sx={StyleCloseIcon} />
                    </TitleElem>
                    {board.items.map((item, index) =>
                        <CreateTask
                            key={index}
                            className='item'
                            draggable={true}
                            onDragOver={(e) => dragOverHandler(e)}
                            onDragLeave={(e) => dragLeaveHandler(e)}
                            onDragStart={(e) => dragStartHandler(e, board, item)}
                            onDragEnd={(e) => dragEndHandler(e)}
                            onDrop={(e) => dropHandler(e, board, item)}
                        >
                            {item.title}
                        </CreateTask>
                    )}
                    <BoxAddTask>
                        <AddTask>
                            <AddIcon />
                            Добавить карточку
                        </AddTask>
                        <TableViewIcon sx={{ padding: '3px', fill: '#5e6c84', cursor: 'pointer' }} />
                    </BoxAddTask>
                </BoxItem>
            )}
        </BoxTable>
    )
}