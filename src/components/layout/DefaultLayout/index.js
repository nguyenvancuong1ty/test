import Header from '../components/Header';
import Sidebar from './Sidebar';
import styles from './DefaultLayout.module.scss';

function DefaultLayout({ children }) {
    return (
        <div>
            <Header></Header>
            <div className={styles.container}>
                <Sidebar></Sidebar>
                <div className={styles.content}>{children}</div>
            </div>
        </div>
    );
}

export default DefaultLayout;
