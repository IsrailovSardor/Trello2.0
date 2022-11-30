import { BoxItem, DescrItem, TitleItem } from './PrivateButtonStyle'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';


type Props = {
    item: {
        icon: JSX.Element,
        title: string,
        act: boolean,
        description: string,
    },
    index: number
}


export const Item = ({ item, index }: Props) => {
    return (
        <BoxItem key={index}>
            <TitleItem>
                {item.icon}
                <p>{item.title}</p>
                {item.act ? <CheckOutlinedIcon sx={{ width: '20px', height: '20px', padding: '4px' }} /> : null}
            </TitleItem>
            <DescrItem>
                {item.description}
            </DescrItem>
        </BoxItem>
    )
}