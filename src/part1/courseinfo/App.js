// part 1.1
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   const Content = (props) => {
//     return (
//       <div>
//         <Part part={props.part1} exercises={props.exercises1}/>
//         <Part part={props.part2} exercises={props.exercises2}/>
//         <Part part={props.part3} exercises={props.exercises3}/>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content
//         part1={part1}
//         part2={part2}
//         part3={part3}
//         exercises1={exercises1}
//         exercises2={exercises2}
//         exercises3={exercises3}
//       />
//       <Total
//         exercises1={exercises1}
//         exercises2={exercises2}
//         exercises3={exercises3}
//       />
//     </div>
//   )
// }

// export default App

// part 1.2
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = 'Fundamentals of React'
//   const exercises1 = 10
//   const part2 = 'Using props to pass data'
//   const exercises2 = 7
//   const part3 = 'State of a component'
//   const exercises3 = 14

//   const Part = (props) => {
//     return (
//       <div>
//       <p>{props.part} {props.exercises}</p>
//       </div>
//     )
//   }


//   // const Content = (props) => {
//   //   return (
//   //     <div>
//   //       {props.part1} : {props.exercises1}<br />
//   //       {props.part2} : {props.exercises2}<br />
//   //       {props.part3} : {props.exercises3}<br />
//   //     </div>
//   //   )
//   // }

//   const Content = (props) => {
//     return (
//       <div>
//         <Part part={props.part1} exercises={props.exercises1}/>
//         <Part part={props.part2} exercises={props.exercises2}/>
//         <Part part={props.part3} exercises={props.exercises3}/>
//       </div>
//     )
//   }

//   const Header = (props) => {
//     console.log(props)
//     return <h1>{props.course}</h1>
//   }

//   const Total = (props) => {
//     return (
//       <div>
//         <p>Total amount of exercises: {props.exercises1 + props.exercises2 + props.exercises3}</p>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content
//         part1={part1}
//         part2={part2}
//         part3={part3}
//         exercises1={exercises1}
//         exercises2={exercises2}
//         exercises3={exercises3}
//       />
//       <Total
//         exercises1={exercises1}
//         exercises2={exercises2}
//         exercises3={exercises3}
//       />
//     </div>
//   )
// }

// export default App

// part 1.3
// const App = () => {
//   const course = 'Half Stack application development'
//   const part1 = {
//     name: 'Fundamentals of React',
//     exercises: 10
//   }
//   const part2 = {
//     name: 'Using props to pass data',
//     exercises: 7
//   }
//   const part3 = {
//     name: 'State of a component',
//     exercises: 14
//   }

//   return (
//     <div>
//       <h1>{course}</h1>
//       <p>{part1.name + ' ' + part1.exercises}</p>
//       <p>{part2.name + ' ' + part2.exercises}</p>
//       <p>{part3.name + ' ' + part3.exercises}</p>
//       <p>Total amount of exercises: {part1.exercises + part2.exercises + part3.exercises}</p>
//     </div>
//   )
// }

// export default App

// part 1.4
// const App = () => {
//   const course = 'Half Stack application development'
//   const parts = [
//     {
//       name: 'Fundamentals of React',
//       exercises: 10
//     },
//     {
//       name: 'Using props to pass data',
//       exercises: 7
//     },
//     {
//       name: 'State of a component',
//       exercises: 14
//     }
//   ]

//   const Header = (props) => {
//     console.log(props)
//     return <h1>{props.course}</h1>
//   }

//   const Part = (props) => {
//     const {name, exercises} = props;
//     return (
//       <div>
//       <p>{name} {exercises}</p>
//       </div>
//     )
//   }

//   const Content = (props) => {
//     return (
//       <div>
//         <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
//         <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
//         <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
//       </div>
//     )
//   }

//   const Total = (props) => {
//     return (
//       <div>
//         <p>Total amount of exercises: {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
//       </div>
//     )
//   }

//   return (
//     <div>
//       <Header course={course} />
//       <Content parts={parts} />
//       <Total parts={parts} />
//     </div>
//   )
// }

// export default App

// part 1.5
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  const Header = (props) => {
    const {course}=props;
    console.log(props)
    return <h1>{course.name}</h1>
  }

  const Part = (props) => {
    return (
      <div>
      <p>{props.parts.name} {props.parts.exercises}</p>
      </div>
    )
  }

  const Content = (props) => {
    return (
      <div>
        <Part name={props.parts[0].name} exercises={props.parts[0].exercises}/>
        <Part name={props.parts[1].name} exercises={props.parts[1].exercises}/>
        <Part name={props.parts[2].name} exercises={props.parts[2].exercises}/>
      </div>
    )
  }

  const Total = (props) => {
    return (
      <div>
        <p>Total amount of exercises: {props.parts[0].exercises+props.parts[1].exercises+props.parts[2].exercises}</p>
      </div>
    )
  }

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
}

export default App