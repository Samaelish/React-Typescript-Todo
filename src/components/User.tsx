import './User.css'

export interface UserInt {
    name: string;
    age?: string;
    job: string;
    deleteUser: () => void
}

const User: React.FC<UserInt> = ({ name, age, job, deleteUser }) => {
    return (
        <div className='card'>
            <div className='row'>
                <h2>Имя: </h2>
                <p>{name}</p>
            </div>
        <hr/>
        {age && ( 
        <>
            <div className='row'>
                    <h2>Возраст: </h2>
                    <p>{age}</p>
                </div> 
        <hr/> 
        </>
        )}
            <div className='row'>
                    <h2>Профессия: </h2>
                    <p>{job}</p>
                </div>
        <button className="deleteBtn" onClick={deleteUser}>Удалить</button>

        </div>
    )
}

export default User