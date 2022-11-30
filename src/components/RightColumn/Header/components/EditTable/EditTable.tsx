import EqualizerRoundedIcon from '@mui/icons-material/EqualizerRounded';
import { Box } from '@mui/system';
import { ClickAwayListener } from '@mui/material';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarViewWeekOutlinedIcon from '@mui/icons-material/CalendarViewWeekOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import ClearAllRoundedIcon from '@mui/icons-material/ClearAllRounded';
import SpeedRoundedIcon from '@mui/icons-material/SpeedRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

import { BlockTable, BtnLink, BoxFooterBtn, BoxFooterDescr, BoxFooterLink, BoxFooterTitle, BoxItem, BoxSelect, BoxTitle, StyleCloseIcon, StyleTableIcon } from './EditTableStyle';
import { Item } from './Item';


interface TableItems {
    icon: JSX.Element,
    checked: boolean,
    title: string,
    lock: boolean,
}
const TableItems: TableItems[] = [
    {
        icon: <EqualizerRoundedIcon sx={{ ...StyleTableIcon, rotate: '180deg' }} />,
        checked: true,
        title: 'По доске',
        lock: false,
    },
    {
        icon: <CalendarViewWeekOutlinedIcon sx={StyleTableIcon} />,
        checked: false,
        title: 'Таблица',
        lock: true,
    },
    {
        icon: <CalendarMonthOutlinedIcon sx={StyleTableIcon} />,
        checked: false,
        title: 'Календарь',
        lock: true,
    }, {
        icon: <ClearAllRoundedIcon sx={StyleTableIcon} />,
        checked: false,
        title: 'Хронология',
        lock: true,
    }, {
        icon: <SpeedRoundedIcon sx={StyleTableIcon} />,
        checked: false,
        title: 'Панель',
        lock: true,
    }, {
        icon: <LocationOnOutlinedIcon sx={StyleTableIcon} />,
        checked: false,
        title: 'Карта',
        lock: true,
    },
]

export const EditTable = () => {
    const [open, setOpen] = useState<boolean>(false);


    return (
        <Box sx={{ display: 'flex' }}>
            <BlockTable>
                <EqualizerRoundedIcon sx={{
                    ...StyleTableIcon,
                    rotate: '180deg'
                }} />
                <p>По доске</p>
            </BlockTable>

            <ClickAwayListener onClickAway={() => setOpen(false)}>
                <Box sx={{ position: 'relative' }}>
                    <BtnLink onClick={() => setOpen(!open)}>
                        <ExpandMoreIcon sx={{
                            fill: "white",
                        }} />
                    </BtnLink>
                    {open ? (
                        <BoxSelect>
                            <BoxTitle>
                                <p>Оформите подписку, чтобы получить доступ к режимам просмотра</p>
                                <CloseIcon onClick={() => setOpen(!open)} sx={StyleCloseIcon} />
                            </BoxTitle>
                            <Box sx={{ marginBottom: '8px' }}>
                                {TableItems.map((item, index) =>
                                    <Item item={item} index={index} />
                                )}
                            </Box>
                            <Box>
                                <BoxFooterTitle>Взгляните на свои проекты по-новому</BoxFooterTitle>
                                <BoxFooterDescr>С Premium вы можете прямо на досках просматривать ключевые сроки, назначения, данные и не только.</BoxFooterDescr>
                                <BoxFooterBtn>Начать пробный бесплатный период</BoxFooterBtn>
                                <BoxFooterLink href="https://trello.com/premium">Подробнее о версии Premium...</BoxFooterLink>
                            </Box>
                        </BoxSelect>
                    ) : null}
                </Box>
            </ClickAwayListener >
        </Box>
    )
}

