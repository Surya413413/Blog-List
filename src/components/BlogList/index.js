// Write your JS code here

import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {userList} = props

  return (
    <div>
      <BlogItem userDetails={userList} />
      <hr />
    </div>
  )
}
export default BlogList
