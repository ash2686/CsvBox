// import { min } from 'moment';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts'
// import  image  from '../../assests/box.png';
import './Form.css'


const Form = ({ currentId, setCurrentId }) => {

    let[file, setFile] = useState('');
    
    const [postData, setPostData] = useState({
        name: '', description: ' ', csvFile : null
    });

    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    console.log('This is a FORM Component');
    const dispatch = useDispatch();

    useEffect(() => {
        if (post) setPostData(post)
    }, [post])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (postData.name === '' || postData.description === '') {
            clear();
            alert("fields cannot be empty");
        } else {
            if (currentId) {
                dispatch(updatePost(currentId, postData));
            } else {
                dispatch(createPost(postData));
            }

            alert("Submitted, thanks");
            clear();
        }
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({ name: '', description: ' ', csvFile: '' });
    }

    return (
        <>
            <form className="ui form fluid" onSubmit={handleSubmit}>
                <div className="field ui column sixteen wide">
                    <label>Name</label><br />
                    <input type="text" name="name" placeholder="Name.." value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} />
                </div>
                <div className="field ui column sixteen wide">
                    <label>Description</label>
                    <input type="text" name="description" placeholder="Description.." value={postData.description} onChange={(e) => setPostData({ ...postData, description: e.target.value })} />
                </div>

                <div className='fields ui column twelve container wide grey'>
                      <input type='file' name='csvFile' multiple={false}  placeholder="Select a File" onChange={(e) =>
                        {
                            setPostData({...postData, csvFile: e.target.files[0].name})
                            console.dir(postData.csvFile)
                        }
                      } />
                </div>

                <button className="ui button green fluid" type="submit">Submit</button>
                <button className="ui button blue fluid" onClick={() => clear}>Clear</button>
            </form>

        </>
    )
}

export default Form;