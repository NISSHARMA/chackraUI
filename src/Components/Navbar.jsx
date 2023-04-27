import { Box, Flex, Spacer, Image, Text, Button } from '@chakra-ui/react'

const Navbar = () => {
    return (
        <>
            <Box w='100%' h="80px" color='blue.500' fontWeight="extrabold" display={{lg:'block', md: 'none' ,sm:'none' }}>
                <Flex>
                    <Box p='4' h="80px" w="20%"  >
                        <Image pl={4} src='https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png' alt='Dan Abramov' />
                    </Box>
                    <Spacer />

                    <Box p='4' pl="4" h="80px" w="40%"  >
                        <Flex align="center" justify="space-around">
                            <Text fontSize='xl'>Home</Text>
                            <Text fontSize='xl'> Class</Text>
                            <Text fontSize='xl'>About</Text>
                            <Text fontSize='xl'>Blog</Text>
                            <Text fontSize='xl'>Contact</Text>
                            <Button colorScheme='cyan' size='xl' borderRadius="10" p="3">
                                Enroll Now
                            </Button>
                        </Flex>
                    </Box>
                </Flex>
            </Box>
        </>
    )
}

export default Navbar