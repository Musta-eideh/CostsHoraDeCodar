import styles from '../project/ProjectForm.module.css'

import { useState } from 'react'

import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ServiceForm({ handleSubmit, btnText, projectData }) {

    const[service,setService] = useState({});

    function submit(e) {
        e.preventDefault();
        projectData.services.push(service);
        handleSubmit(projectData);
    }

    function handleChange(e) {
        setService({...service, [e.target.name]: e.target.value})
    }
    
    return(

        <form onSubmit={submit} className={styles.form}>
            <Input 
            type="Text"
            text="Service name"
            name="name"
            placeholder="Enter service name"
            handleOnChange={handleChange}
            />

            <Input 
            type="Number"
            text="Cost of service"
            name="cost"
            placeholder="Enter the total amount"
            handleOnChange={handleChange}
            />

            <Input 
            type="Text"
            text="Description service"
            name="description"
            placeholder="Enter description service"
            handleOnChange={handleChange}
            />

            <SubmitButton text={btnText} />
        </form>
    )
}

export default ServiceForm;