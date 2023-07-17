import React from "react"
import { Link } from "gatsby"
import * as Icon from "react-feather"
import parse from "html-react-parser"

const BlogSidebar = ({ posts, tags }) => {
  return (
    <>
      <div className="widget-area" id="secondary">
        <div className="widget widget_search">
          <form className="search-form">
            <label htmlFor="search">
              <input
                type="search"
                className="search-field"
                placeholder="Search..."
              />
            </label>
            <button type="submit">
              <Icon.Search />
            </button>
          </form>
        </div>

        <div className="widget widget_startp_posts_thumb">
          <h3 className="widget-title">Popular Posts</h3>
          {posts && posts.length > 0 && posts.map(post => 
            <article className="item" key={post.id}>
              <Link to={`/blog-detail/${post.id}`} className="thumb">
                <span className="fullimage cover bg1" role="img"></span>
              </Link>

              <div className="info">
                <time>{posts.date}</time>
                <h4 className="title usmall">
                  <Link to={`/blog-detail/${post.id}`}>
                    {parse(post.title)}
                  </Link>
                </h4>
              </div>

              <div className="clear"></div>
            </article>            
          )}
        </div>

        {/* <div className="widget widget_categories">
          <h3 className="widget-title">Categories</h3>

          <ul>
            <li>
              <Link to="/blog-1">Business</Link>
            </li>
            <li>
              <Link to="/blog-1">Privacy</Link>
            </li>
            <li>
              <Link to="/blog-1">Technology</Link>
            </li>
            <li>
              <Link to="/blog-1">Tips</Link>
            </li>
            <li>
              <Link to="/blog-1">Uncategorized</Link>
            </li>
          </ul>
        </div> */}

        <div className="widget widget_tag_cloud">
          <h3 className="widget-title">Tags</h3>

          <div className="tagcloud">
            {tags && tags.map(({ tag }) => 
              <Link to={`/blogsByTag/${tag.slug}`} key={tag.id}>
                {tag.name} <span className="tag-link-count">({tag.count})</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default BlogSidebar
