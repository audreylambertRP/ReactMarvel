import React, {PropTypes} from 'react'

const Redirections = ({hero}) => {
  const details = () => {
    if (hero.description) return (<div>Details</div>)
  }
  const wiki = () => {
    if (hero.urls.length) return (<div>Wiki</div>)
  }
  const comicLink = () => {
    if (hero.comics.items.length
        || hero.series.items.length
        || hero.stories.items.length) {
      return (<div>Comic link</div>)
    }
  }
   
  return (
    <div>
      {details()}
      {wiki()}
      {comicLink()}
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
