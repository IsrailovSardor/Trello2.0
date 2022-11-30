import { useState } from "react";

import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import CloseIcon from '@mui/icons-material/Close';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import CorporateFareOutlinedIcon from '@mui/icons-material/CorporateFareOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import LockIcon from '@mui/icons-material/Lock';

import { BlockNameLock, BoxItem, BoxSelect, BoxTitle, DescrItem, StyleCloseIcon, StyleLockIcon, TitleItem } from './PrivateButtonStyle';
import { Item } from "./Item";


interface PrivateItems {
    icon: JSX.Element,
    title: string,
    act: boolean,
    description: string,
}


const PrivateItems: PrivateItems[] = [
    {
        icon: <LockOutlinedIcon sx={{ fill: 'red', width: '20px', height: '20px', padding: '4px' }} />,
        title: 'Приватная',
        act: true,
        description: 'Просматривать и изменять эту доску могут только добавленные на нее участники.'
    },
    {
        icon: <GroupOutlinedIcon sx={{ fill: 'black', width: '20px', height: '20px', padding: '4px' }} />,
        title: 'Рабочее пространство',
        act: false,
        description: 'Просматривать и изменять эту доску могут все участники рабочего пространства «sardor0906200: рабочее пространство».'
    },
    {
        icon: <CorporateFareOutlinedIcon sx={{ fill: 'black', width: '20px', height: '20px', padding: '4px' }} />,
        title: 'Организация',
        act: false,
        description: 'Просматривать эту доску могут все сотрудники организации. Чтобы предоставить это разрешение, доску нужно добавить в корпоративное рабочее пространство.'
    },
    {
        icon: <PublicOutlinedIcon sx={{ fill: 'green', width: '20px', height: '20px', padding: '4px' }} />,
        title: 'Публичная',
        act: false,
        description: 'Просматривать эту доску могут все в Интернете. Изменять ее могут только участники.'
    },
]


export const PrivateButton = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Box sx={{ position: 'relative' }}>
                <BlockNameLock onClick={() => setOpen(!open)}>
                    <LockIcon sx={StyleLockIcon} />
                    <p>Приватная</p>
                </BlockNameLock>
                {open ? (
                    <BoxSelect>
                        <BoxTitle>
                            <p>Изменение видимости</p>
                            <CloseIcon onClick={() => setOpen(!open)} sx={StyleCloseIcon} />
                        </BoxTitle>
                        <Box>
                            {PrivateItems.map((item, index) => <Item item={item} index={index} />)}
                        </Box>
                    </BoxSelect>
                ) : null}
            </Box>
        </ClickAwayListener >
    )
}