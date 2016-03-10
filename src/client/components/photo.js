import React, {PropTypes} from 'react'

const Photo = ({url, onMain}) => {
  
  const handleMain = (e) => {
    e.preventDefault()
    onMain()
  }
  
  return (
    <div>
      <img src={url} alt="heroImage" />
      <button onClick={handleMain}>Back to list</button>
    </div>
  )
}

Photo.propTypes = {
  url: PropTypes.string.isRequired,
  onMain: PropTypes.func.isRequired
}

export default Photo
