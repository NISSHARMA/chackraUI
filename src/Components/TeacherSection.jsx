import { Box, Text ,Grid} from '@chakra-ui/react'
import TeacherCard from './TeacherCard'

const TeacherSection = () => {

    let data = [
        {
            image: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",
            name: "Amilia Kouli",
            role: "Sports Instructor"
        },
        {
            image: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",
            name: "Amilia Kouli",
            role: "Sports Instructor"
        },
        {
            image: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",
            name: "Amilia Kouli",
            role: "Sports Instructor"
        },
        {
            image: "https://preview.colorlib.com/theme/kindergarten/assets/img/gallery/team2.png",
            name: "Amilia Kouli",
            role: "Sports Instructor"
        }
    ]



    return (
        <>
            <Box w='100%' p={4} color='white'>
                <Box h='200' m='auto' p={4} color='white' w={{ lg: '60%', sm: '90%', md: '85%' }}>
                    <Text fontSize='4xl' fontWeight="extrabold" color='blue.600'>Expert Teachers</Text>
                    <Text color='black' fontSize='lg'>Our set he for firmament morning sixth subdue today the darkness creeping gathered divide our let god moving today. Moving in fourth air night bring upon lesser subdue.
                    </Text>
                </Box>


                <Grid color='black' textAlign='center' w='80%'  m='auto'  gap={5} templateColumns={{ lg: 'repeat(4, 1fr)', sm: 'repeat(1, 1fr)', md: 'repeat(2, 1fr)' }}>
                    {
                        data.map((el)=>(
                            <TeacherCard 
                            image={el.image}
                            name={el.name}
                            role={el.role}
                            />
                        ))

                    }
                </Grid>






            </Box>


        </>
    )
}

export default TeacherSection