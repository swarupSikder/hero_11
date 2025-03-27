export default function User({user}){
    const {name, company, address} = user;
    return (
        <div className="user-card">
            <h3>{name}</h3>
            <p>Company: {company.name}</p>
            <p>City: {address.city}</p>

        </div>
    )
}