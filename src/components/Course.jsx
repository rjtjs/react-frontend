const Course = ({ course }) => {
    const totalExercises = course.parts.reduce((prev, curr) => prev + curr.exercises, 0)
    
    return (
        <div>
            <h4>Course {course.id}: {course.name}</h4>
            <ul>
                {course.parts.map(part =>
                    <li key={part.id}> {part.id}: {part.name}
                        <ul style={{ 'listStyleType': 'none' }}>
                            <li>Number of exercises: {part.exercises}</li>
                        </ul>
                    </li>
                )}
            </ul>
            <p>Total exercises: {totalExercises}</p>
        </div>
    )
}

export default Course
