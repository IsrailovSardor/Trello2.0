import { Box } from '@mui/system'
import { BoxItem, StyleTableIcon } from './EditTableStyle'
import DragIndicatorOutlinedIcon from '@mui/icons-material/DragIndicatorOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


type Props = {
    item: {
        icon: JSX.Element,
        checked: boolean,
        title: string,
        lock: boolean,
    }
    index: number
}


export const Item = ({ item, index }: Props) => {

    return (
        <BoxItem key={index}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center',
                color: item.lock ? 'gray' : 'black',
                cursor: item.lock ? 'not-allowed' : 'default'
            }}>
                <DragIndicatorOutlinedIcon sx={{ ...StyleTableIcon, cursor: 'pointer' }} />
                <input type="checkbox" name="act" id="act" checked={item.checked} />
                {item.icon}
                <p>{item.title}</p>
            </Box>
            {item.lock ?
                <LockOutlinedIcon sx={{ ...StyleTableIcon, color: item.lock ? 'gray' : 'black' }} />
                : null
            }
        </BoxItem>
    )
}