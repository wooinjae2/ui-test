import './Modal.css';
function Modal(props) {

  return (
    <div className={!props.modalOpen ? "hidden" : "modal-wrapper "}>
      <h1>유효하지 않은 데이터입니다.</h1>
      <button onClick={props.onClickConfirm}>확인</button>
    </div>
  );
}
export default Modal;