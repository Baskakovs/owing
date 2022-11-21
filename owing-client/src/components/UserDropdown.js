function UserDropdown({users, onChange}){

    function handleChange(e){
        onChange(e)
    }
    return(
        <>
        <select name='user_id' onChange={handleChange}>
            {Array.isArray(users) ? users.map((user)=>{
                return (<option value={user.id}>{`${user.first_name} .${user.last_name[0]}`}</option>)
            })
            :null}
        </select>
        </>
    )
}
export default UserDropdown