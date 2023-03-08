import React from "react";

const ModifyPost = (props) => {
  return (
    <>
      <div className="row d-flex justify-content-center mt-5">
        <div className="col-md-10">
          <div className="card">
            <div className="card-body">
              <form>
                <h2>Modify Post</h2>
                <label className="col-sm-12 col-form-label">
                  <b>Title</b>
                  <input
                    className="form-control form-control-sm"
                    defaultValue={props.title}
                    autoFocus={true}
                    onChange={props.savePostTitleToState}
                    placeholder="title"
                    size="39"
                  />
                </label>
                <br />
                <label className="col-sm-12 col-form-label">
                  <b>Content</b>
                  <textarea
                    className="form-control form-control-sm"
                    defaultValue={props.content}
                    onChange={props.savePostContentToState}
                    placeholder="contents"
                    rows="15"
                    cols="41"
                  />
                </label>
                <button
                  title="update changes"
                  className="btn btn-success ml-3"
                  onClick={props.updatePost}
                >
                  Update Post
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ModifyPost;
