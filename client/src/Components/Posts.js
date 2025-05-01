import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { getPosts } from "../Features/PostSlice";
import { Table } from "reactstrap";
import moment from "moment"; //to convert the timestamp.
import { likePost } from "../Features/PostSlice";
import { FaThumbsUp } from "react-icons/fa6";

const Posts = () => {
  //needed vars
  const posts = useSelector((state) => state.posts.posts);
  const email = useSelector((state) => state.users.user.email);
  const userId = useSelector((state) => state.users.user._id);

  //needed hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLikePost = (postId) => {
    const postData = {
      postId: postId,

      userId: userId,
    };

    dispatch(likePost(postData));
    navigate("/");
  };

  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div className="postsContainer">
      <Table className="table table-striped">
        <thead>All Posts</thead>

        <tbody>
          {posts.map((post) => (
            <tr key={post._id}>
              {/* Ensure to add a unique key for each row */}
              <td>{post.email}</td>
              <td>
                {post.postMsg}
                <p>{moment(post.createdAt).fromNow()}</p>
                <p className="likes">
                  <a href="#" onClick={() => handleLikePost(post._id)}>
                    <FaThumbsUp />
                  </a>
                  ({post.likes.count})
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div> /* End of posts */
  );
};

export default Posts;
