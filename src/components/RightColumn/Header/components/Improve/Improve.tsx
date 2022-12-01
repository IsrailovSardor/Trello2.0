import { useState } from "react";

import Box from '@mui/material/Box';
import ClickAwayListener from '@mui/material/ClickAwayListener';
import CloseIcon from '@mui/icons-material/Close';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';

import { BlockNameLock, BoxFooter, BoxFooterBtn, BoxFooterDescr, BoxSelect, BoxTitle, ImgImpove, StyleCloseIcon, StyleLockIcon } from "./ImproveStyle";


export const Improve = () => {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <ClickAwayListener onClickAway={() => setOpen(false)}>
            <Box sx={{ position: 'relative' }}>
                <BlockNameLock onClick={() => setOpen(!open)}>
                    <RocketLaunchIcon sx={StyleLockIcon} />
                    Улучшения
                </BlockNameLock>
                {open ? (
                    <BoxSelect>
                        <BoxTitle>
                            <p>Улучшения</p>
                            <CloseIcon onClick={() => setOpen(!open)} sx={StyleCloseIcon} />
                        </BoxTitle>
                        <BoxFooter>
                            <ImgImpove src='src/assets/img/impove.png' alt="impoveImg" />
                            <BoxFooterDescr>
                                Усовершенствуйте свои доски с помощью дополнительных функций и интеграции с такими приложениями, как Google Drive, Slack и другие.
                            </BoxFooterDescr>
                            <BoxFooterBtn>Добавление улучшений</BoxFooterBtn>
                        </BoxFooter>
                    </BoxSelect>
                ) : null}
            </Box>
        </ClickAwayListener>
    )
}