import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { TittleBtn, TittleInput, TittleName, TittleText, Wrapper, WrapperBlock, WrapperLeft } from './HeaderStyles';
import { Box } from '@mui/system';


interface NavigationItem {
    title: string
}

interface NavigationIcon {
    icon: JSX.Element
}

const NavigationItems: NavigationItem[] = [
    { title: "Рабочие пространства" },
    { title: "Недавние" },
    { title: "В избранном" },
    { title: "Шаблоны" },
]

export const NavigationIconsStyle = {
    fill: 'white',
    marginRight: '5px',
    cursor: 'pointer',
    width: '32px',
    height: '32px',
    padding: '4px',
    borderRadius: '3px',
    '&:hover': {
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
    },
}

const NavigationIcons: NavigationIcon[] = [
    { icon: <NotificationsActiveIcon sx={NavigationIconsStyle} /> },
    { icon: <HelpOutlineIcon sx={NavigationIconsStyle} /> },
    { icon: <AccountCircleIcon sx={NavigationIconsStyle} /> },
]


export const Header = () => {
    return (
        <Wrapper >
            <WrapperLeft>
                <ViewQuiltIcon sx={NavigationIconsStyle} />

                <TittleName>Trello 2.0</TittleName>

                <WrapperBlock>
                    {NavigationItems.map((item, index) =>
                        <TittleText key={index}>{item.title}<KeyboardArrowDownIcon /></TittleText>
                    )}
                    <TittleBtn>Создать</TittleBtn>
                </WrapperBlock>
            </WrapperLeft>

            <WrapperLeft>
                <TittleInput type="text" placeholder='Поиск' />

                {NavigationIcons.map((item, index) => <Box key={index}>{item.icon}</Box>)}
            </WrapperLeft>
        </Wrapper>
    )
}