import { BoxItem, DescrItem, TitleItem } from './PrivateButtonStyle'
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';

interface TableItem {
    icon: JSX.Element,
    title: string,
    act: boolean,
    description: string,
}

interface ItemProps {
    index: number,
    item: [string, TableItem],
    changeMode: () => void
}


export const Item = ({ item, index, changeMode }: ItemProps) => {
    return (
        <BoxItem key={index} onClick={changeMode}>
            <TitleItem>
                {item[1].icon}
                <p>{item[1].title}</p>
                {item[1].act ? <CheckOutlinedIcon sx={{ width: '20px', height: '20px', padding: '4px' }} /> : null}
            </TitleItem>
            <DescrItem>
                {item[1].description}
            </DescrItem>
        </BoxItem>
    )
}