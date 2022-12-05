import {Form, Input} from 'semantic-ui-react'
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
    console.log(names)
    return(
        <>
        <Form>
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
        </Form>
        </>
    )
}
export default AddNewUserPage