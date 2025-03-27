import './App.css'

export default function Singer({singer}){
    console.log(singer);
    return (
        <div className='singer-div'>
            <h3>name: {singer.name}</h3>
        </div>
    )
}