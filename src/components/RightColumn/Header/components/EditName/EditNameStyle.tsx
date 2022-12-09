import styled from "styled-components"

export const BlockName = styled.div`
    display: flex;
    align-items: center;
    height: 32px;
    white-space: nowrap;

    p {
        color: white;
        font-size: 18px;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        padding: 0 12px;
        transition: 0.3s;
        line-height: 32px;
        margin-right: 6px;
        border-radius: 3px;
        cursor: pointer;
        &:hover {
            background-color: rgba(255, 255, 255, 0.7);
        }
    }
    input {
        
        background-color: white;
        height: 32px;
        border-radius: 3px;
        margin-right: 6px;
        color: #000000;
        font-size: 18px;
        font-weight: 700;
        font-family: 'Roboto', sans-serif;
        padding: 0 6px;
    }

`
export const StarIconStyle = {
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    padding: '5px',
    borderRadius: '3px',
    fill: 'gold',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
}