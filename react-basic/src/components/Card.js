function Card(props){
    const classes = 'card ' + props.className;
  return <div className={classes}>
      {props.children}
  </div>
}
//container로 많이 쓰임
export default Card;