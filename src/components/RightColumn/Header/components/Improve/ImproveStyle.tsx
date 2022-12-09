import styled from "styled-components"

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

    p {
        white-space: nowrap;
        line-height: 40px;
        font-size: 14px;
        font-weight: 400;   
        color: #5e6c84;
    }
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

export const StyleLockIcon = {
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    padding: '7px',
}


export const BoxFooterDescr = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin: 10px 10px 17px 10px;
    line-height: 20px;
    color: #5E6C84;
    text-align: center;
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
export const ImgImpove = styled.img`
    width: 164px;
    height: 147px;
    margin-bottom: 12px;
    margin: auto;
`
export const BoxFooter = styled.div`
    display: flex;
    flex-direction: column;
`   