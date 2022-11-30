import styled from "styled-components"
import { Style } from "../../LeftColumn/LeftColumn"
import LockIcon from '@mui/icons-material/Lock';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import FilterListIcon from '@mui/icons-material/FilterList';
import BoltIcon from '@mui/icons-material/Bolt';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { PrivateButton } from "./components/PrivateButton/PrivateButton";
import { EditName } from "./components/EditName/EditName";
import { EditTable } from "./components/EditTable/EditTable";


export const Header = () => {

    return (
        <WrapperHeader>
            <WrapperBlockLeftRoght>
                <EditName />
                <Line />
                <PrivateButton />
                <Line />
                <EditTable />
            </WrapperBlockLeftRoght>


            <WrapperBlockLeftRoght>
                <BtnImprove><RocketLaunchIcon sx={{ marginRight: '4px', fill: 'white', padding: '4px' }} />Улучшения</BtnImprove>
                <BtnImprove><BoltIcon sx={{ marginRight: '4px', fill: 'white', padding: '2px' }} />Автоматизация</BtnImprove>
                <Line />
                <BtnImprove>
                    <FilterListIcon sx={{ fill: "white", padding: '4px' }} />
                    Фильтр
                </BtnImprove>
                <Line />
                <BtnSharet>
                    <PersonAddIcon sx={{ fill: "black", padding: '4px' }} />
                    Поделиться
                </BtnSharet>
                <Line />
                <BtnLink >
                    <MoreHorizIcon sx={{ fill: "white", padding: '2px' }} />
                </BtnLink>
            </WrapperBlockLeftRoght>

        </WrapperHeader>
    )
}
export const WrapperHeader = styled.div`
    width: 100%;
    height: auto;
    padding: 8px 4px 4px 12px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`
export const WrapperBlockLeftRoght = styled.div`
     display: flex;
        align-items: center;
        gap: 8px;
`
export const BtnImprove = styled.button`
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 0.5);
    border: 0;
    border-radius: 3px;
    height: 32px;
    padding: 0 12px 0 6px;
    color: white;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;

`
export const BtnSharet = styled.button`
    background-color: white;
    display: flex;
    align-items: center;
    border-radius: 3px;
    border: 0;
    height: 32px;
    padding: 0 12px 0 6px;
    color: #000;
    font-size: 14px;
    font-family: 'Roboto', sans-serif;
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
`
export const Line = styled.div`
    width: 2px;
    height: 20px;
    border-radius: 3px;
    background-color: #ffffff84;
`


