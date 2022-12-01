import { useState } from 'react';

import StarIcon from '@mui/icons-material/Star';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

import { BlockName, StarIconStyle } from './EditNameStyle';


export const EditName = () => {
    const [act, setAct] = useState<boolean>(false)
    const [editValue, setEditValue] = useState<boolean>(true)
    const [value, setValue] = useState<string>('Zeon Bonus')

    const hanldeSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setEditValue(true)
    }

    return (
        <BlockName>
            {
                editValue ?
                    <p onClick={() => setEditValue(false)}>{value}</p> :
                    <form onSubmit={(e) => hanldeSubmit(e)}>
                        <input type="text" placeholder='Название' value={value}
                            onChange={(e) => setValue(e.target.value)}
                            style={{ width: `${value.length}ch` }}
                        />
                    </form>
            }
            {
                act ?
                    <StarIcon
                        onClick={() => setAct(!act)}
                        sx={StarIconStyle} /> :
                    <StarBorderOutlinedIcon
                        onClick={() => setAct(!act)}
                        sx={{
                            ...StarIconStyle,
                            fill: 'white',
                            '&:hover': {
                                fill: 'gold',
                            }
                        }}
                    />
            }
        </BlockName>
    )
}
