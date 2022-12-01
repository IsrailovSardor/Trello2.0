import styled from "styled-components"
export const StyleCloseIcon = {
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    padding: '6px',
    fill: '#5e6c84',
}

export const BoxTable = styled.div`
    display: flex;
    padding: 10px 10px;
    justify-content: flex-start;
    gap: 8px;
    height: calc(100% - 50px);
    overflow-x: scroll;
    &::-webkit-scrollbar {
        width: 10px;
    }
    
    &::-webkit-scrollbar-track {
        margin: 10px;
        background: #0000003d;
        border-radius: 30px;
    }

    &::-webkit-scrollbar-thumb {
        background: #ebecf0;
        border-radius: 30px;

    }
`
export const BoxItem = styled.div`
    min-width: 272px;
    height: fit-content;
    padding: 0 8px;
    background-color: #ebecf0;
    border-radius: 3px;
`
export const TitleElem = styled.div`
    display: flex;    
    align-items: center;
    justify-content: space-between;
    height: 40px;
    padding-left: 8px;
    font-weight: 600;
    line-height: 20px;
    font-size: 14px;
`
export const CreateTask = styled.div`
    width: 100%;
    background-color: white;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    overflow: hidden;
    color: #172b4d;
    margin-bottom: 8px;
    padding: 6px 8px 4px;
    border-radius: 3px;
    cursor: pointer;
`
export const BoxAddTask = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
`

export const AddTask = styled.button`
    color: #5e6c84;
    margin: 2px 0 8px 8px;
    background-color: #ebecf0;
    display: flex;
    align-items: center;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    border: 0;
    width: 100%;
    border-radius: 3px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #9c9c9c3d;
    }
` 