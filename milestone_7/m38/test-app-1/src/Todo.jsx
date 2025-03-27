// export default function ToDo({task, isDone}){
//     return(
//         <li>Task: {task}</li>
//     )
// }




// export default function ToDo({task, isDone}){
//     if(isDone){
//         return (
//             <li>Done: {task}</li>
//         )
//     }
//     else{
//         return (
//             <li>Not Done: {task}</li>
//         )
//     }
    
// }





// export default function ToDo({task, isDone, time=0}){
//     if(isDone){
//         return (
//             <li>Done: {task} Duration: {time}</li>
//         )
//     }

//     return (
//         <li>Not Done: {task}</li>
//     )
    
// }










// conditional rendering: 3 ternary
// export default function ToDo({task, isDone, time=0}){
//     return isDone? <li>Done: {task} Duration: {time}</li> : <li>Not Done: {task}</li>
// }










// conditional rendering: 4 &&
// export default function ToDo({task, isDone, time=0}){
//     return isDone && <li>Done: {task} Duration: {time}</li>
// }










// conditional rendering: 5 ||
export default function ToDo({task, isDone, time=0}){
    return isDone || <li>Done: {task} Duration: {time}</li>
}