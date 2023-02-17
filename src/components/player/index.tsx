import { Box, Container, HStack } from '@chakra-ui/react'
import { FaStepBackward, FaPlay, FaStepForward, FaVolumeUp } from 'react-icons/fa'
import { FiRepeat } from 'react-icons/fi'
import { RiPlayListFill } from 'react-icons/ri'


import { Disc } from './Disc'
import { SongInfo } from './song-info'
import { PlayerControls } from './players-controls'
import { PlayerProgress } from './player-progress'

export const Player = () => {
    return (
        <Box
            width='full'
            bg='red.400'
            height={{ base: 24, '2xl':32}}
            flexShrink={0}            
        >
            <Container centerContent height="full" maxW='7xl'>
                <HStack
                    width='full'
                    height='full'
                    justifyContent='flex-start'
                    spacing={12}
                >
                    <Disc/>
                    <SongInfo />
                    <PlayerControls 
                        controls={[
                            { label: 'Previous Song', icon: <FaStepBackward /> },
                            { label: 'Play song', icon: <FaPlay />},
                            { label: 'Next Song', icon: <FaStepForward /> }
                        ]}
                    />
                    <PlayerProgress />
                    <PlayerControls 
                        controls={[
                            { label: 'Control Volume', icon: <FaVolumeUp /> },
                            { label: 'Enable repeat', icon: <FiRepeat />},
                            { label: 'Playelist', icon: <RiPlayListFill /> }
                        ]}
                    />
                    {/* player controls */}
                </HStack>
            </Container>

        </Box>
    )
}