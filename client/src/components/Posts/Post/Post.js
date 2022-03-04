import { useDispatch } from 'react-redux'
import React from 'react'
import box10 from '../../../assests/box20.png'
import moment from 'moment'
// import FileBase from 'react-file-base64'
// import { Icon } from 'semantic-ui-react'
import './Post.css'
import { deletePost } from '../../../actions/posts'



function Post({ post, setCurrentId }) {
  console.log('This is a POST Component')

  let dispatch = useDispatch();

  return (
    <div className="ui cards post">
      <div className="card">
        <div className="image">
          <img className = "ui small image" src={box10} alt="box image not found" />
          <button onClick={()=> setCurrentId(post._id)}><i className="edit icon"></i></button>
          <button onClick={() => dispatch(deletePost(post._id))}><i className="close icon"></i></button>
        </div>

        <div className="content main-content">
          <div className="header">Name : {post.name}</div>
          <div className="description">
           Description : {post.description}
          </div>
        </div>

        <div className="extra content main-content">
          <span>
          CSV File &nbsp; 
          <i className="arrow alternate circle down outline icon"></i>
        </span> <br />
          <span>
          Created At : {moment(post.createdAt).calendar()}
          </span>
        </div>
      </div>
    </div>

  )
}
// () => setCurrentId(post._id)
{/*  */ }
export default Post