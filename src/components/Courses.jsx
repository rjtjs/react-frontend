import Course from "./Course"

const Courses = ({ courses }) => {
    const total = courses.reduce((prev, next) => prev + 
        next.parts.reduce((prevPart, nextPart) => prevPart + nextPart.exercises, 0),
        0
    )

    return (
        <div>
            {courses.map(course =>
                <Course course={course} />
            )}
            <p><b>Total exercises across courses: {total}</b></p>
        </div>
    )
}

export default Courses