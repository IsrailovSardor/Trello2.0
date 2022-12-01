import styled from "styled-components"

export const Wrapper = styled.div`
    background-color: #026AA7;
    border-bottom: 1px solid #dfe1e67e;
    display: flex;
    justify-content: space-between;
    backdrop-filter: blur(6px);
    max-height: 44px;
    width: 100%;
    padding: 6px 4px;
    overflow-x: scroll;
    white-space: nowrap;
    &::-webkit-scrollbar {
        width: 0;
        height: 0;
    }
`
export const WrapperLeft = styled.div`
    display: flex;
    align-items: center;
    height: 100%;
`
export const TittleName = styled.p`
    color: white;
    line-height: 32px;
    margin-right: 4px;
    font-family: 'Roboto', sans-serif;
    font-weight: 800;
    margin-right: 20px;
    cursor: pointer;

`
export const WrapperBlock = styled.div`
    display: flex;
`
export const TittleText = styled.p`
    color: white;
    line-height: 32px;
    margin-right: 4px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    cursor: pointer;
    border-radius: 3px;
    transition: 0.3s;
    padding: 0 12px;

    &:hover {
        background-color: rgba(255, 255, 255, 0.5);
    }
`
export const TittleBtn = styled.button`
    border-radius: 3px;
    border: 0;
    background-color: #0000003e;
    font-weight: bold;
    height: 32px;
    padding: 0 12px;
    color: white;
    margin-left: 4px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        background-color: #0000006e;
    }
`

export const TittleInput = styled.input`
    width: fit-content;
    padding: 0 12px;
    background-color: rgba(255, 255, 255, 0.15);
    border: 0;
    color: white;
    line-height: 32px;
    margin-right: 4px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    border-radius: 3px;
    outline: none;
    &::placeholder {
        color: white;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
    }
`