import BlogItem from '../BlogItem'
import './index.css'

// Write your JS code here
const BlogsList = props => {
  const {blogsList} = props

  return (
    <ul className="blogs-container">
      {blogsList.map(blog => (
        <BlogItem blogItem={blog} key={blog.id} />
      ))}
    </ul>
  )
}

export default BlogsList
