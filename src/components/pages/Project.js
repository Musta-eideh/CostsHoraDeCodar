import { parse, v4 as uuidv4} from 'uuid'

import styles from './Project.module.css';

import { useParams } from 'react-router-dom/cjs/react-router-dom.min';
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import Container from '../layout/Container'
import Message from '../layout/Message'
import ProjectForm from '../project/ProjectForm'
import ServiceForm from '../service/ServiceForm';

function Project() {

    const { id } = useParams();

    const [project, setProject] = useState([]);
    const [showProjectForm, setShowProjectForm] = useState(false);
    const [showServiceForm, setShowServiceForm] = useState(false);
    const [message, setMessage] = useState();
    const [type, setType] = useState();

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

    function editPost(project) {
        setMessage('')
        //budget validation
        if(project.budget < project.cost) {
            //message
            setMessage('The budget cannot be less than the cost of the project!')
            setType('error')
            return false
        }

        fetch(`http://localhost:5000/projects/${project.id}`, {
            method: 'PATCH', 
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(project),
        })
        .then(resp => resp.json())
        .then((data) => {

            setProject(data)
            setShowProjectForm(false)
            //message
            setMessage('Updated project')
            setType('success')

        })
        .catch(err => console.log(err))

    }

    function createService(project){
        setMessage('')
        //last service
        const lastService = project.services[project.services.length -1]

        lastService.id = uuidv4();

        const lastServiceCost = lastService.cost;

        const newCost = parseFloat(project.cost) + parseFloat(lastServiceCost)

        //maximum value validation

        if(newCost > parseFloat(project.budget)) {
            setMessage('Budget exceeded, check the value of the service')
            setType('error')
            project.services.pop()
            return false
        }

        //add service cost to project total cost

        project.cost = newCost;

        //update project

        fetch(`http://localhost:5000/project/${project.id}`, {
            method: 'PATCH',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        }).then((resp) => resp.json())
        .then((data) => {
            ///exibir os serviços
            console.log(data)
        })
        .catch(err => console.log(err))

    }

    function toggleProjectForm(){
        setShowProjectForm(!showProjectForm)
    }

    function toggleServiceForm(){
        setShowServiceForm(!showServiceForm)
    }

    return (<>
        {project.name ? (
        <div className={styles.project_details}>
            <Container customClass="column">
                {message && <Message type={type} msg={message}/>}
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
                            <ProjectForm 
                            handleSubmit={editPost} 
                            btnText="Finish editing" 
                            projectData={project} />
                        </div>
                    )}
                </div>
                <div className={styles.service_form_container}>
                    <h2>Add a service:</h2>
                    <button className={styles.btn} onClick={toggleServiceForm}>
                        {!showServiceForm ? 'Add service' : 'Close'}
                    </button>
                    <div className={styles.project_info}>
                        {showServiceForm && <ServiceForm 
                            handleSubmit={createService}
                            btnText="Add service"
                            projectData={project}
                        />}
                    </div>    
                </div>
                <h2>Serviços</h2>
                <Container customClass="start">
                        <p>Itens de serviço</p>
                </Container>
            </Container>
        </div>
        ): (
            <Loading/>
        )}
    </>)
}

export default Project;