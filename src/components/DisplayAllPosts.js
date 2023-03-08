import React, { useState, useRef, useEffect } from "react";
import CreateNewPost from "./CreateNewPost";
import ModifyPost from "./ModifyPost";
import Post from "./Post";
import axios from "axios";
import Swal from "sweetalert2";
import { setTokenSourceMapRange } from "typescript";

const DisplayAllPosts = () => {
  // managing states below
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [allPosts, setAllPosts] = useState([]);

  const getAllPost = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((res) => {
      setAllPosts(res.data);
    });
  };
  useEffect(() => {
    getAllPost();
  }, []);

  const [isCreateNewPost, setIsCreateNewPost] = useState(false);
  const [isModifyPost, setIsModifyPost] = useState(false);
  const [editPostId, setEditPostId] = useState("");
  const getTitle = useRef();
  const getContent = useRef();
  const savePostTitleToState = (event) => {
    setTitle(event.target.value);
  };
  const savePostContentToState = (event) => {
    setContent(event.target.value);
  };
  const savePost = (event) => {
    event.preventDefault();
    axios.post(`https://jsonplaceholder.typicode.com/posts`, {
      title: title,
      body: content,
    });
    toggleCreateNewPost();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Post created successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const toggleCreateNewPost = () => {
    setIsCreateNewPost(!isCreateNewPost);
  };
  const toggleModifyPostComponent = () => {
    setIsModifyPost(!isModifyPost);
  };
  const editPost = (id) => {
    setEditPostId(id);
    toggleModifyPostComponent();
  };
  const updatePost = (event) => {
    event.preventDefault();
    const updatedPost = allPosts.map((eachPost) => {
      if (eachPost.id === editPostId) {
        return {
          ...eachPost,
          title: title || eachPost.title,
          content: content || eachPost.content,
        };
      }

      return eachPost;
    });
    setAllPosts(updatedPost);
    toggleModifyPostComponent();
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Post updated successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };
  const deletePost = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        const modifiedPost = allPosts.filter((eachPost) => {
          return eachPost.id !== id;
        });
        setAllPosts(modifiedPost);
        Swal.fire("Deleted!", "Your post has been deleted.", "success");
      }
    });
  };

  if (isCreateNewPost) {
    return (
      <div>
        <CreateNewPost
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          getTitle={getTitle}
          getContent={getContent}
          savePost={savePost}
          close={() => toggleCreateNewPost(setTokenSourceMapRange)}
        />
        <button
          className="btn btn-danger cancel-button"
          onClick={toggleCreateNewPost}
        >
          Cancel
        </button>
      </div>
    );
  } else if (isModifyPost) {
    const post = allPosts.find((post) => {
      return post.id === editPostId;
    });

    return (
      <>
        <ModifyPost
          title={post.title}
          content={post.body}
          updatePost={updatePost}
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
          toggleCreateNewPost={toggleCreateNewPost}
          id={post.id}
        />
        <button
          className="btn btn-danger cancel-update-button"
          onClick={toggleModifyPostComponent}
        >
          Cancel
        </button>
      </>
    );
  }

  return (
    <>
      <div className="container-fluid">
        <div className="row mt-5 px-4">
          <div className="col-6">
            <h2 className="font-weight-bold">All Posts</h2>
          </div>
          <div className="col-6 d-flex justify-content-end">
            <button
              className="btn button-edits create-post"
              onClick={toggleCreateNewPost}
            >
              Create New
            </button>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            {!allPosts.length ? (
              <div>
                <li>There are no posts yet.</li>
              </div>
            ) : (
              allPosts.map((eachPost) => (
                <Post
                  id={eachPost.id}
                  key={eachPost.id}
                  title={eachPost.title}
                  content={eachPost.body}
                  editPost={editPost}
                  deletePost={deletePost}
                />
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default DisplayAllPosts;
