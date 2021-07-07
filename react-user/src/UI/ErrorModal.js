import React from 'react';
import Button from './Button';
import Card from './Card';
import ReactDOM from 'react-dom';
import styles from './ErrorModal.module.css';

const Backdrop = (props) =>{
    return <div className={styles.backdrop} onClick={props.onClose}/>;

}

const ModalOverlay = props => {
  return (
    <Card className={styles.modal}>
    <header className={styles.header}>
        <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
        <p>
            {props.message}
        </p>
    </div>
    <footer className={styles.actions}>
        <Button onClick={props.onClose}>Confirm</Button>

    </footer>

</Card>
  )
}


const ErrorModal = (props) =>{

    return(
        <React.Fragment>
          {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, document.getElementById('backdrop-root'))}
          {ReactDOM.createPortal(<ModalOverlay title={props.title} message={props.message} onClose={props.onClose}/>, document.getElementById('overlay-root'))}
        </React.Fragment>
    )

}

export default ErrorModal;