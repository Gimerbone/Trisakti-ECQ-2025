import styles from './LandingPage.module.css'
import Stopwatch from '../../components/stopwatch'
import { useGoogleLogin } from '../../hooks/googleLogin';

export const LandingPage = (): React.ReactElement => {
    const { login } = useGoogleLogin();

    return (
        <div className={styles.root}>
            <main className={styles.main}>
            <div className={styles.container}>
                <h1>Environmental Quiz Competition</h1>
                <div className={styles.timeContainer}>
                    <Stopwatch width={38} height={38}/>
                    <p>60 minutes - Multiple Choice and Essay</p>
                </div>
                <button className={styles.loginButton} onClick={login}>Sign In</button>
            </div>
        </main>
        </div>
    )
}