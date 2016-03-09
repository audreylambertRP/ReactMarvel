import React, {PropTypes} from 'react'

const Redirections = ({hero}) => {

  const styles = {
    container: {
      borderTop: '0.5px solid #fafafa',
      display: 'flex',
      flexDirection:'row',
      flexWrap: 'wrap'
    },
    redirection: {
      fontSize: '50%',
      color: 'lightGrey',
      margin: '4px 0px 0px 10px'
    }
  }

  return (
    <div style={styles.container}>
      {hero.description && <span style={styles.redirection}>#details</span>}
      {hero.urls.length && <span style={styles.redirection}>#wiki</span>}
      {(hero.comics.items.length
        || hero.series.items.length
        || hero.stories.items.length) !== 0
        && <span style={styles.redirection}>#comiclink</span>}
    </div>
  )
}

Redirections.propTypes = {
  hero: PropTypes.shape({
    id: PropTypes.number,
    thumbnail: PropTypes.shape({
      path: PropTypes.string.isRequired,
      extension: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
}

export default Redirections
