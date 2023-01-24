import './index.css'
// Write your JS code here

const BlogItem = props => {
  const {blogItem} = props
  const {title, description, publishedDate} = blogItem
  console.log(blogItem)
  return (
    <li className="blog-container">
      <div className="published-container">
        <h1 className="title">{title}</h1>
        <p className="published">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
    </li>
  )
}

export default BlogItem
