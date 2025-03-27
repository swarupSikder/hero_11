import './App.css'
import ToDo from './Todo';
import Player  from './List';
import Singer from './Singers';


function App() {
  //const time = 50;
  const playerList = ['Swarup', 'Sikder', 'Koba', 'Abdullah'];

  const singers = [
    {id: 1, name: 'Hridoy', rating: 9.6},
    {id: 2, name: 'Tahsan', rating: 9.0},
    {id: 3, name: 'James', rating: 8.4},
  ]

  return (
    <>
      <h1>Hello World</h1>

      {
        singers.map(singer => <Singer key={singer.id} singer={singer}></Singer>)
      }

      {/* {
        playerList.map(player => <Player name={player}></Player>)
      } */}


      {/* <ToDo
        task="Learn React"
        isDone={true}
        time={time}>
      </ToDo>
      
      <ToDo task="Learn JS" isDone={false}></ToDo>
      <ToDo task="Revise HTML" isDone={true}></ToDo> */}

      {/* <Person></Person>
      <Developer developer="Koba" skill="React"></Developer>
      <Developer developer="Swarup" skill="JS"></Developer> */}
    </>
  )
}

function Person() {
  const myAge = 17;
  return (
    <p>I am a person. My age is {myAge}</p>
  )
}

function Developer(props) {

  const devStyle = {
    border: '2px solid green',
    borderRadius: '20px',
    margin: '10px'
  }
  return (
    <div style={devStyle}>
      <h3>Developer: {props.developer}</h3>
      <p>Skill: {props.skill}</p>
    </div>
  )
}

export default App
