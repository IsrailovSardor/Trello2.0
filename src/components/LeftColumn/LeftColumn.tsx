import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import StarIcon from '@mui/icons-material/Star';
import { NavigationIconsStyle } from "../Header/Header";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { BlockWrapperIcon, BlockWrapperText, LogoProject, MyTable, MyTableWrapper, NameProject, NameProjectActive, SwitchBtn, TextProject, TittleNameProject, WrapperLeftColumn } from "./LeftColumnStyle";

export const Style = {
    fill: 'white',
    cursor: 'pointer',
    width: '22px',
    height: '22px',
}
const VanilaStyle = {
    display: "flex",
    alignItems: 'center',
    gap: '6px'
}


export const LeftColumn = () => {
    return (
        <WrapperLeftColumn>
            <NameProject>
                <TittleNameProject>
                    <LogoProject>Z</LogoProject>
                    <TextProject>Zeon</TextProject>
                </TittleNameProject>
                <SwitchBtn><ChevronLeftIcon sx={NavigationIconsStyle} /></SwitchBtn>
            </NameProject>
            <MyTableWrapper>
                <MyTable>
                    <p>Мои доски</p>
                    <MoreHorizIcon sx={{
                        ...Style,
                        width: '24px',
                        height: '24px',
                        padding: '2px',
                        borderRadius: '3px',
                        '&:hover': {
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                        }
                    }} />
                </MyTable>
                <NameProjectActive>
                    <div style={VanilaStyle}>
                        <BlockWrapperIcon />
                        <BlockWrapperText>Zeon 1 поток </BlockWrapperText>
                    </div>
                    <div style={VanilaStyle}>
                        <MoreHorizIcon sx={Style} />
                        <StarIcon sx={Style} />
                    </div>
                </NameProjectActive>
            </MyTableWrapper>
        </WrapperLeftColumn >
    )
}
