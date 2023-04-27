import { Box, Image, Text } from '@chakra-ui/react'
import { Grid, GridItem, Flex } from '@chakra-ui/react'
import { AiFillTwitterCircle } from 'react-icons/ai'
import { BsFacebook } from 'react-icons/bs'
import { BsPinterest } from 'react-icons/bs'
import { AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
    return (
        <>

            <Box bg='#4255A4' w='100%' p={4} color='white'>

                <Grid  bg='#4255A4'  gap={8} templateColumns={{ lg: 'repeat(3, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(1, 1fr)' }}>
                    <GridItem w='80%'  pl={10}  bg='#4255A4'>
                        <Box color='white' >
                            <Image pl={4} align='left' src='https://preview.colorlib.com/theme/kindergarten/assets/img/logo/logo.png' alt='Dan Abramov' />
                            <Text fontSize='xl' align='left' mt={5}>Users and submit their own items. You can create different packages and by connecting with your PayPal or Stripe account charge users for registration.</Text>

                        </Box>
                        <Flex mt={5} align='center' justify='space-around'>
                            <AiFillTwitterCircle />
                            <BsFacebook />
                            <BsPinterest />
                            <AiFillLinkedin />
                        </Flex>
                    </GridItem>


                    <GridItem w='50%'   align='left' ml='10'  justify='space-around' bg='#4255A4'>
                        <Text fontSize='2xl' fontWeight="extrabold"> Quick Links</Text>
                        <Text fontSize='xl'>Classes</Text>
                        <Text fontSize='xl'>Join with us</Text>
                        <Text fontSize='xl'>About</Text>
                        <Text fontSize='xl'>Blog</Text>
                        <Text fontSize='xl'>Events</Text>
                    </GridItem>


                    <GridItem  w={{ lg: '60%', sm: '100%', md: '100%' }} ml='10'  align='left' justify='space-around' bg='#4255A4'>
                        <Text fontSize='2xl' fontWeight="extrabold">About Us</Text>
                        <Text fontSize='xl'>Our Team</Text>
                        <Text fontSize='xl'>Join with us</Text>
                        <Text fontSize='xl'>About</Text>
                        <Text fontSize='xl'>Blog</Text>
                        <Text fontSize='xl'>Events</Text>
                    </GridItem>
                </Grid>

            </Box>

        </>
    )
}

export default Footer