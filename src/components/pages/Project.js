import styles from './Project.module.css';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'

function Project() {

    const { id } = useParams();

    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            fetch(`http://localhost:5000/projects/${id}`, {
                method: "GET",
                headers: {
                    'Content-type': 'application/json'
                },
            })
            .then(resp => resp.json())
            .then((data) =>{
                setProject(data)
            })
            .catch(err => console.log)
        }, 3000)
    }, [id])

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    return (<>
        {project.name ? (
        <div className={styles.project_details}>
            <Container customClass="column">
                <div className={styles.details_container}>
                    <h1>Projeto: {project.name}</h1>
                    <button onClick={toggleProjectForm} className={styles.btn}>
                        {!showProjectForm ? 'Edit project' : 'Close'}
                    </button>
                    {!showProjectForm ? (
                        <div className={styles.project_info}>
                            <p>
                                <span>Category: </span> {project.category.name}
                            </p>
                            <p>
                                <span>Total Budget: </span> R$ {project.budget}
                            </p>
                            <p>
                                <span>Total used:</span> R$ {project.cost}
                            </p>
                        </div>
                    ) : (
                        <div className={styles.project_info}>
                            <p>Form</p>
                        </div>
                    )}
                </div>
            </Container>
        </div>
        ): (
            <Loading/>
        )}
    </>)
}

export default Project;