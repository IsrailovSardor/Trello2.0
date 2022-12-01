import styled from "styled-components"



export const BoxTitle = styled.div`
    position: relative;
    text-align: center;
    height: 40px;
    border-bottom: 1px solid #091e4221;
    margin-bottom: 8px;

    p {
        line-height: 40px;
        font-size: 14px;
        font-weight: 400;   
        color: #5e6c84;
    }
`

export const BoxItem = styled.div`
    padding: 6px 0;
    cursor: pointer;
`
export const TitleItem = styled.div`
    display: flex;
    align-items: center;
    p {
        font-size: 14px;
        line-height: 20px;
    }
`
export const DescrItem = styled.div` 
    clear: both;
    color: #5e6c84;
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    margin-top: 4px;
`
export const BlockNameLock = styled.button`
    background-color: rgba(255, 255, 255, 0.5);
    display: flex;
    align-items: center;
    padding: 0 12px 0 0;
    color: #fff;
    font-size: 14px;
    border-radius: 3px;
    font-family: 'Roboto', sans-serif;
    border: 0;
    cursor: pointer;
    height: 32px;
    transition: 0.3s;
    &:hover {
        background-color: rgba(255, 255, 255, 0.7);
    }
`

export const BoxSelect = styled.div`
    position: absolute;
    top: 40px;
    left: 0;
    z-index: 10;
    background-color: white;
    width: 304px;
    border-radius: 3px;
    padding: 0 12px;
`
export const StyleCloseIcon = {
    cursor: 'pointer',
    position: 'absolute',
    right: '-12px',
    top: 0,
    width: '40px',
    height: '40px',
    padding: '10px',
    fill: '#5e6c84'
}

