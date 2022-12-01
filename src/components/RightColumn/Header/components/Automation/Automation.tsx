import { useState } from "react";

import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import CloseIcon from '@mui/icons-material/Close';
import BoltIcon from '@mui/icons-material/Bolt';
import TuneOutlinedIcon from '@mui/icons-material/TuneOutlined';
import TableViewOutlinedIcon from '@mui/icons-material/TableViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { BlockNameLock, BoxItem, BoxSelect, BoxTitle, DescrItem, StyleCloseIcon, TitleItem } from "./AutomationStyle";

export const StyleLockIcon = {
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    padding: '6px',
}


interface RulesItem {
    title: string,
    icon: JSX.Element,
    description: string
}


const Rules: RulesItem[] = [
    {
        title: "Правила",
        icon: <TuneOutlinedIcon sx={StyleLockIcon} />,
        description: "Настройте автоматическое выполнение действий в зависимости от расписания или срока выполнения карточки."
    },
    {
        title: "Кнопки",
        icon: <TableViewOutlinedIcon sx={StyleLockIcon} />,
        description: "Добавляйте кнопки с обратной стороны карточек или вверху доски."
    },
    {
        title: "Отчеты по электронной почте",
        icon: <EmailOutlinedIcon sx={StyleLockIcon} />,
        description: "Настройте отчеты по электронной почте, например еженедельный список всех карточек, срок выполнения которых истекает через 7 дней."
    }
]

export const Automation = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Box sx={{ position: 'relative' }}>
                <BlockNameLock onClick={() => setOpen(!open)}>
                    <BoltIcon sx={StyleLockIcon} />
                    Автоматизация
                </BlockNameLock>
                {open ? (
                    <BoxSelect>
                        <BoxTitle>
                            <p>Автоматизация</p>
                            <CloseIcon onClick={() => setOpen(!open)} sx={StyleCloseIcon} />
                        </BoxTitle>
                        {
                            Rules.map((item, index) =>
                                <BoxItem key={index} >
                                    <TitleItem>
                                        {item.icon}
                                        <p>{item.title}</p>
                                    </TitleItem>
                                    <DescrItem>
                                        {item.description}
                                    </DescrItem>
                                </BoxItem>
                            )}
                    </BoxSelect>
                ) : null}
            </Box>
        </ClickAwayListener>
    )
}