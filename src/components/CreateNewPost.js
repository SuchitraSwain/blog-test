import React from "react";

const CreateNewPost = (props) => {
  return (
    <>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <form onSubmit={props.savePost}>
                <h2>Create New Post</h2>
                <label className="col-sm-12 col-form-label">
                  <b>Title</b>
                  <input
                    className="form-control form-control-sm"
                    autoFocus={true}
                    type="text"
                    placeholder="post title"
                    onChange={props.savePostTitleToState}
                    required
                    ref={props.getTitle}
                  />
                </label>
                <br />
                <label className="col-sm-12 col-form-label">
                  <b>Content</b>
                  <textarea
                    className="form-control form-control-sm"
                    placeholder="description"
                    onChange={props.savePostContentToState}
                    rows="15"
                    cols="41"
                    required
                    ref={props.getContent}
                  />
                </label>
                <br />
                <button title="save post" className="btn btn-success ml-3">
                  save
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateNewPost;
