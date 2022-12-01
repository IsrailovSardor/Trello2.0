import { Box } from '@mui/system'
import { BoxItem, StyleTableIcon } from './EditTableStyle'
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import CheckBoxOutlineBlankOutlinedIcon from '@mui/icons-material/CheckBoxOutlineBlankOutlined';
interface TableItem {
    icon: JSX.Element,
    checked: boolean,
    title: string,
    lock: boolean,
}

interface ItemProps {
    index: number,
    item: [string, TableItem]
}

export const Item = ({ item, index }: ItemProps) => {
    return (
        <BoxItem key={index}
            style={{ cursor: item[1].lock ? 'not-allowed' : 'pointer', }}
        >
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                color: item[1].lock ? 'gray' : 'black',
            }}>
                <DragIndicatorOutlinedIcon
                    sx={{ ...StyleTableIcon, cursor: item[1].lock ? 'not-allowed' : 'pointer', }} />
                {item[1].checked ?
                    <CheckBoxOutlinedIcon
                        sx={{ fill: item[1].lock ? 'gray' : 'black', }} /> :
                    <CheckBoxOutlineBlankOutlinedIcon
                        sx={{ fill: item[1].lock ? 'gray' : 'black' }} />}
                {item[1].icon}
                <p>{item[1].title}</p>
            </Box>
            {
                item[1].lock ?
                    <LockOutlinedIcon
                        sx={{ ...StyleTableIcon, fill: item[1].lock ? 'gray' : 'black' }} /> : null
            }
        </BoxItem >
    )
}