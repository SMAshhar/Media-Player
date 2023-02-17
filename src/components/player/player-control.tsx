import { IconButton, Tooltip } from '@chakra-ui/react'

import { brandRing } from 'src/utils/brandRing'
import { Control } from 'types/control'


type Props = Control & {
    color? : string
}

export const PlayerControl = ({ label, icon, color}: Props) => {
    return (
        <Tooltip label={label} placement="top">
            <IconButton 
                aria-label={label}
                icon={icon}
                rounded='full'
                color={color}
                {...brandRing}
            />
        </Tooltip>
    )
}