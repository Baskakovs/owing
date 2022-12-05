import {Form, Input, Button} from 'semantic-ui-react'
import {useHistory} from 'react-router-dom'
import {useState} from 'react'
function AddNewUserPage(){
    const [names, setNames] = useState([])
    function handleChange(e){
        let key = e.target.name
        let value = e.target.value
        setNames({
            ...names,
            [key]: value
        })
    }
    const history = useHistory()
    function handleSubmit(e){
        e.preventDefault()
        fetch(`http://localhost:9291/users`,{
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(names)
            }
        )
        .then(()=> history.push('/'))
    }
    console.log(names)
    return(
        <>
        <Form onSubmit={handleSubmit}>
            <div className='w-100 my-5'>
                <Input
                    placeholder={"First Name"}
                    name='first_name'
                    onChange={handleChange}
                />
            </div>
            <div className='w-100 my-5'>        
                <Input
                    placeholder={"Last Name"}
                    name='last_name'
                    onChange={handleChange}
                />
            </div>
            <Button value='submit' fluid>Add</Button>
        </Form>
        </>
    )
}
export default AddNewUserPage