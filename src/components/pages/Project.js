import styles from './Project.module.css';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react'
function Project() {

    const { id } = useParams();

    const [project, setProject] = useState([]);

    useEffect(() => {
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
    }, [id])

    return <h1>{project.name}</h1>
}

export default Project;