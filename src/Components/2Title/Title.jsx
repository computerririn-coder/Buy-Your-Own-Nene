import styles from './Title.module.css'

function Title({ className }) {
    return (
        <section className={`${styles.container} ${className}`}>
            Title
        </section>
    );
}

export default Title;
