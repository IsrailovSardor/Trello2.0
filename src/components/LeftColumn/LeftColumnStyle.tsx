import styled from "styled-components"

export const WrapperLeftColumn = styled.div`
    min-width: 260px;
    height: 100%;
    background-color: #026AA7;
    border-right: 1px solid #dfe1e67e;

`
export const NameProject = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 12px 14px;
    min-height: 40px;
    border-bottom: 1px solid #dfe1e67e;
`
export const TittleNameProject = styled.div`
    gap: 8px;
    display: flex;
    align-items: center;
`
export const LogoProject = styled.div`
    background: linear-gradient(#403294, #0747a6);
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 3px;
    width: 36px;
    height: 36px;
    font-weight: bold;
    color: white;
    font-size: 20px;
    font-family: 'Roboto', sans-serif;
`
export const TextProject = styled.p`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: white;
`
export const SwitchBtn = styled.button`
    border: 0;
    background: none;
`
export const MyTableWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 14px 0;
`

export const MyTable = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 600;
    letter-spacing: -0.003em;
    color: white;
    padding: 0 12px;
    margin-bottom: 4px;
`

export const NameProjectActive = styled.div`
    display: flex;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 32px;
    padding: 0 12px;
    background-color: hsla(0, 0%, 100%, 0.3);
`

export const BlockWrapperIcon = styled.div`
    width: 26px;
    height: 20px;
    background-color: red;
    border-radius: 3px;
`

export const BlockWrapperText = styled.div`
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 600;
    color: white;
`
export const Style = {
    fill: 'white',
    cursor: 'pointer',
    width: '22px',
    height: '22px',
}
export const VanilaStyle = {
    display: "flex",
    alignItems: 'center',
    gap: '6px'
}