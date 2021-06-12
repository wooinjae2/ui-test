import styles from './post.module.css';
import PropTypes from 'prop-types';

export const Post = (props) => {

  
  return (
    <div className={styles.post}>
      <div className={styles.postTitle}>
        <h2>{props.title}</h2>
      </div>
      <hr />

      <div >{props.children}</div>
      {props.refList ? (
        <>
          <hr />
          <div className={styles.reference}>
            <h2>출처</h2>
            {props.refList &&
              props.refList.map((ref) => {
                return <div>{ref}</div>;
              })}
          </div>
        </>
      ) : null}
    </div>
  );
}


Post.defaultProps = {
  title: '제목',
  children:<p>컨텐츠</p>,
  refList:[]

}

Post.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  title: PropTypes.string,
  /**
   * What background color to use
   */
  children: PropTypes.element,
  /**
   * How large should the button be?
   */
  refList: PropTypes.arrayOf(PropTypes.string),
  /**
   * Button contents
   */
};

