import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import styles from './ProjectForm.module.css'

function ProjectForm({btnText}) {
    return(
        <form className={styles.form}>
            <Input  
                type="text" 
                text="Name project" 
                name="name" 
                placeholder="Enter project name."
            />
            <Input  
                type="number" 
                text="Project budget" 
                name="name" 
                placeholder="Enter project budget."
            />
            <Select name="category_id" text="Select the category."/>
            <SubmitButton text={btnText} />
        </form>
    )
}

export default ProjectForm;