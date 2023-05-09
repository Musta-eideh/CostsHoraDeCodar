import styles from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm';

function NewProject() {
    return (
        <div className={styles.newproject_container}>
            <h1>Create projects</h1>
            <p>Create your project and then add the services.</p>
            <ProjectForm />
        </div>
    )
}

export default NewProject;