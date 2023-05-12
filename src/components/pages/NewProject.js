import { useHistory } from 'react-router-dom'

import styles from './NewProject.module.css'

import ProjectForm from '../project/ProjectForm';

function NewProject() {

    const history = useHistory();

    function createPost(project) {
        //initialize cost and services
        //Backend
        project.cost = 0;
        project.services = [];

        fetch('http:/localhost:5000/projects', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project),
        }).then(((resp) => resp.json())
            .then((data) => {
                console.log(data)
                //redirect
            })
        ).catch(err => console.log(err));
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create projects</h1>
            <p>Create your project and then add the services.</p>
            <ProjectForm handleSubmit={createPost} btnText="Create project" />
        </div>
    )
}

export default NewProject;