// // 2.1
// const Header = ({course}) => {
//   return (
//     <div>
//       <h1>{course.name}</h1>
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//     <p>{props.part.name} {props.part.exercises}</p>
//     </div>
//   )
// }

// const Content = ({course}) => {
//   return (
//   <div>
//     {course.parts.map(part => 
//       <Part key={part.id} part={part} />
//     )}
//   </div>
//   )
// }

// const Course = ({course}) => {
//   return (
//     <div>
//       <Header course={course} />
//       <Content course={course} />
//     </div>
//   )
// }

// export default Course

// 2.2 and 2.3
const Header = ({course}) => {
    return (
      <div>
        <h1>{course.name}</h1>
      </div>
    )
  }
  
  const Part = (props) => {
    return (
      <div>
      <p>{props.part.name} {props.part.exercises}</p>
      </div>
    )
  }
  
  const Content = ({course}) => {
    return (
    <div>
      {course.parts.map(parts => 
        <Part key={parts.id} part={parts} />
      )}
    </div>
    )
  }
  
  const Total = ({course}) => {
    const sumExercises = course.parts.reduce((s, p) => {
      console.log('what is happening', s, p)
      return s+p.exercises
    }, 0)
    return(
      <div>
        <b>
          Number of {sumExercises} exercises
        </b>
      </div>
    )
  }
  
  
  const Course = ({course}) => {
    return (
      <div>
        <Header course={course} />
        <Content course={course} />
        <Total course={course} />
      </div>
    )
  }
  
  export default Course