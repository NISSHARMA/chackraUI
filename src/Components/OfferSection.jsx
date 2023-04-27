import { Box, Text, Card, CardBody, Image, Stack, Heading, Divider, CardFooter, ButtonGroup, Button } from '@chakra-ui/react'

const OfferSection = () => {
    return (
        <>
            <Box bg='#FFF2F9'  m='auto' w='100%' p={4} color='white' align="center" justify="space-around">

                <Box h='200' m='auto' p={4} color='white' w={{ lg: '60%', sm: '90%', md: '85%' }}>
                    <Text fontSize='4xl' fontWeight="extrabold" color='blue.600'>Classes We Offer </Text>
                    <Text color='black' fontSize='lg'>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.
                    </Text>
                </Box>



                <Box display="flex" align="center" justify="space-between"   m='auto'>

                    <Box  align="center" justify="space-between" display={{ lg: 'flex', sm: 'flex', md: 'flex' }} m='auto'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img1.png'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Intelligent Challenge</Heading>
                                    <Text>
                                        This sofa is perfect for modern tropical spaces, baroque inspired
                                        spaces, earthy toned spaces and for people who love a chic design with a
                                        sprinkle of vintage design.
                                    </Text>

                                </Stack>
                            </CardBody>
                            <Divider />

                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-evenly' }}>

                                <Box>
                                    <Text fontWeight="extrabold" fontSize='md'><span style={{ color: '#ED078B' }}>3-5</span><br />Age Group</Text>
                                </Box>

                                <Box>
                                    <Text fontWeight="extrabold" fontSize='md'><span style={{ color: "#FBCE0F" }}>30</span> <br />Classes</Text>
                                </Box>

                                <Box>
                                    <Text fontWeight="extrabold" fontSize='md'><span style={{ color: '#1F97D4' }}>30/h</span> <br />Hours</Text>
                                </Box>

                            </div>

                        </Card>
                    </Box>




                    <Box  align="center" justify="space-between" display={{ lg: 'flex', sm: 'none', md: 'flex' }} m='auto'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img3.png'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Intelligent Challenge</Heading>
                                    <Text>
                                        This sofa is perfect for modern tropical spaces, baroque inspired
                                        spaces, earthy toned spaces and for people who love a chic design with a
                                        sprinkle of vintage design.
                                    </Text>
                                  
                                </Stack>
                            </CardBody>
                            <Divider />

                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-evenly' }}>

                                <Box>
                                    <Text fontWeight="extrabold" fontSize='md'><span style={{ color: '#ED078B' }}>3-5</span><br />Age Group</Text>
                                </Box>

                                <Box>
                                    <Text fontWeight="extrabold" fontSize='md'><span style={{ color: "#FBCE0F" }}>30</span> <br />Classes</Text>
                                </Box>

                                <Box>
                                    <Text fontWeight="extrabold" fontSize='md'><span style={{ color: '#1F97D4' }}>30/h</span> <br />Hours</Text>
                                </Box>

                            </div>

                        </Card>
                    </Box>




                    <Box  align="center" justify="space-between" display={{ lg: 'flex', sm: 'none', md: 'none' }} m='auto'>
                        <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src='https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/class-img2.png'
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Intelligent Challenge</Heading>
                                    <Text>   This sofa is perfect for modern tropical spaces, baroque inspired
                                        spaces, earthy toned spaces and for people who love a chic design with a
                                        sprinkle of vintage design.The Word You Can Use In
                                    </Text>
                                   
                                </Stack>
                            </CardBody>
                            <Divider />


                            <div style={{ display: "flex", alignItems: "center", justifyContent: 'space-evenly' }}>

                                <Box>
                                    <Text fontWeight="extrabold" fontSize='md'><span style={{ color: '#ED078B' }}>3-5</span><br />Age Group</Text>
                                </Box>

                                <Box>
                                    <Text fontWeight="extrabold" fontSize='md'><span style={{ color: "#FBCE0F" }}>30</span> <br />Classes</Text>
                                </Box>

                                <Box>
                                    <Text fontWeight="extrabold" fontSize='md'><span style={{ color: '#1F97D4' }}>30/h</span> <br />Hours</Text>
                                </Box>

                            </div>

                        </Card>
                    </Box>



                </Box>

            </Box>
        </>
    )


}

export default OfferSection