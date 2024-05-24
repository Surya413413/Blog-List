// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {userDetails} = props
  const {title, id, description, publishedDate} = userDetails
  return (
    <div className="list-container">
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <p>{publishedDate}</p>
    </div>
  )
}
export default BlogItem
