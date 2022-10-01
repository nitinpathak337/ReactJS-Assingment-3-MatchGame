import './index.css'

const Thumbnails = props => {
  const {imageDetails, updateScore} = props

  const {thumbnailUrl, imageUrl} = imageDetails

  const check = () => {
    updateScore(imageUrl)
  }

  return (
    <li className="list-item">
      <button onClick={check} type="button">
        <img src={thumbnailUrl} alt="thumbnail" className="thumbnail-image" />
      </button>
    </li>
  )
}

export default Thumbnails
