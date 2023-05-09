import styles from './Home.module.css'
import saving from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';


function Home() {
    return (
        <section className={styles.home_container}>
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start managing your projects right now!</p>
            <LinkButton to="/newproject" text="Create project" /> 
            <img src={saving} alt="Costs" />
        </section>
    )
}

export default Home;