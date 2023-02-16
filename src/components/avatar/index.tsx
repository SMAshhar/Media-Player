import { HStack, Text, Avatar as ChakraAvatar } from '@chakra-ui/react'

export const Avatar = () => {
    return (
        <HStack flexShrink={0}>
            <Text mr={3} textColor='whiteAlpha.900'>v2fftb</Text>
            <ChakraAvatar name="Kunie Ajayi" src="/images/asd.jpg" width={7} height={7} />
        </HStack>
    )
}