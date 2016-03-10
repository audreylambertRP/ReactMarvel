import React, {PropTypes} from 'react'

const Content = ({hero}) => {
  return (
    <div>
      Dans le composant Content
    </div>
  )
}

Content.propTypes = {
  hero: PropTypes.object.isRequired
}

export default Content
