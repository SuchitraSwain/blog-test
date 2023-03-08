import React from "react";

const Post = ({ id, title, content, editPost, deletePost }) => {
  return (
    <>
      <div className="row px-4 mt-4 align-items-center">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-10">
                  <section key={id}>
                    <h6 className="font-weight-bold">{title}</h6>
                    <p className="text-secondary">{content}</p>
                  </section>
                </div>
                <div className="col-2">
                  <span title="edit post" onClick={() => editPost(id)}>
                    <img
                      src="./edit.svg"
                      className="img-fluid w-25 mx-3 action__btn"
                    />
                  </span>
                  <span title="delete post" onClick={() => deletePost(id)}>
                    <img
                      src="./delete.svg"
                      className="img-fluid w-25 action__btn"
                    />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
