
import { Box, Text, Flex, Image, Grid, GridItem } from '@chakra-ui/react'


const HomeSection = () => {
    return (
        <>
            <Box h='200' m='auto' p={4} color='white' w={{ lg: '80%', sm: '90%', md: '85%' }}>
                <Text fontSize='4xl' fontWeight="extrabold" color='blue.600'> Welcome to our <span style={{ color: "#ED078B" }}>Kindergarten</span> </Text>
                <Text color='grey' fontSize='lg'>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue fowl male signs.
                </Text>
            </Box>

            <Flex   m='auto'>

                <Box display={{lg:'flex', md: 'block' ,sm:'block' }} align="center"  m='auto'>

                    <Box p='4' w={{ lg: '50%', sm: '80%', md: '75%' }} align="center" >

                        <Box w={{ lg: '60%', sm: '90%', md: '75%' }} mt='50px'  align="center"  justify="space-around">
                            <Grid
                                h='100px'
                                templateRows='repeat(2, 1fr)'
                                templateColumns='repeat(5, 1fr)'
                                gap={4}
                            >
                                <GridItem rowSpan={2} colSpan={1}  >
                                    <Image boxSize='100px' pl={4} src='https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg' alt='Dan Abramov' />
                                </GridItem>
                                <GridItem colSpan={4}  >
                                    <Text fontSize='2xl' color='blue.500' fontWeight="extrabold" textAlign='left'>Inter School Sports</Text>
                                </GridItem>
                                <GridItem colSpan={4}  >
                                    <Text fontSize='md' textAlign='left'>The words you use in your written communica speak volumes.</Text>
                                </GridItem>
                            </Grid>
                        </Box>

                        <Box w={{ lg: '60%', sm: '90%', md: '80%' }} mt='50px' align="center"  justify="space-around"> 
                            <Grid
                                h='100px'
                                templateRows='repeat(2, 1fr)'
                                templateColumns='repeat(5, 1fr)'
                                gap={4}
                            >
                                <GridItem rowSpan={2} colSpan={1}  >
                                    <Image boxSize='100px' pl={4} src='https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg' alt='Dan Abramov' />
                                </GridItem>
                                <GridItem colSpan={4}  >
                                    <Text fontSize='2xl' color='blue.500' fontWeight="extrabold" textAlign='left'>Inter School Sports</Text>
                                </GridItem>
                                <GridItem colSpan={4}  >
                                    <Text fontSize='md' textAlign='left'>The words you use in your written communica speak volumes.</Text>
                                </GridItem>
                            </Grid>
                        </Box>


                        <Box w={{ lg: '60%', sm: '90%', md: '80%' }} mt='50px' align="center"  justify="space-around">
                            <Grid
                                h='100px'
                                templateRows='repeat(2, 1fr)'
                                templateColumns='repeat(5, 1fr)'
                                gap={4}
                            >
                                <GridItem rowSpan={2} colSpan={1}  >
                                    <Image boxSize='100px' pl={4} src='https://preview.colorlib.com/theme/kindergarten/assets/img/icon/about-icon1.svg' alt='Dan Abramov' />
                                </GridItem>
                                <GridItem colSpan={4}  >
                                    <Text fontSize='2xl' color='blue.500' fontWeight="extrabold" textAlign='left'>Inter School Sports</Text>
                                </GridItem>
                                <GridItem colSpan={4}  >
                                    <Text fontSize='md' textAlign='left'>The words you use in your written communica speak volumes.</Text>
                                </GridItem>
                            </Grid>
                        </Box>


                    </Box>


                    <Box p='4' w={{ lg: '50%', sm: '90%', md: '75%' }} m='auto' >
                        <Image src='https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/about2.png' alt='Dan Abramov' />
                    </Box>
                </Box>
            </Flex>

        </>
    )
}

export default HomeSection