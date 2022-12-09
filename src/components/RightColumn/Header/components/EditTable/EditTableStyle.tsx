import styled from "styled-components"

export const BlockTable = styled.div`
    display: flex;
    align-items: center;    
    background-color: white;
    display: flex;
    align-items: center;
    border-radius: 3px;
    padding: 0 12px 0 6px;
    cursor: default;
    margin-right: 6px;
    height: 32px;

    p {
        white-space: nowrap;
        color: #000;
        font-size: 14px;
        font-family: 'Roboto', sans-serif;
        margin-right: 4px;
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
export const BoxTitle = styled.div`
    position: relative;
    text-align: center;
    height: 40px;
    border-bottom: 1px solid #091e4221;
    margin-bottom: 8px;
    padding: 0 32px;

    p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 40px;
        font-size: 14px;
        font-weight: 400;   
        color: #5e6c84;
    }
`
export const BoxItem = styled.div`
    padding: 6px 0;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: default;
    p {
        font-size: 14px;
        line-height: 20px;
        font-weight: 400;
        color: #172b4d;
    }
    input {
        cursor: pointer;
        width: 16px;
        height: 16px;
    }
`
export const BoxFooterTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin: 10px;
    line-height: 24px;
    color: #5E6C84;
`
export const BoxFooterDescr = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin: 10px 10px 17px 10px;
    line-height: 20px;
    color: #5E6C84;
`
export const BoxFooterBtn = styled.button`
    margin-bottom: 12px;
    color: white;
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    border-radius: 3px;
    background-color: #0079bf;
    padding: 6px 12px;
    cursor: pointer;
    width: 100%;
    height: 32px;
    border: 0;
    transition: 0.3s;
    &:hover {
        background-color: #025585;
    }
`
export const BoxFooterLink = styled.a`
    color: #5E6C84;
    margin-top: 3px;
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 20px;
    font-weight: 400;
    width: 100%;
    display: flex;
    justify-content: center;
`
export const BtnLink = styled.div`
    background: none;
    border: 0;
    width: 32px;
    height: 32px;
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: 0.3s;
    &:hover {
        background-color: rgba(255, 255, 255, 0.7);
    }
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
export const StyleTableIcon = {
    width: '32px',
    height: '32px',
    padding: '6px',
}

