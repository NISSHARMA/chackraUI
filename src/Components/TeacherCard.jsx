

const TeacherCard = ({ image, name, role }) => {
    return (

        <div style={{margin:'auto'}}>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <h3>{role}</h3>
        </div>

    )
}

export default TeacherCard