import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { savePost } from "../Features/PostSlice";

const SharePosts = () => {
  const [postMsg, setpostMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = useSelector((state) => state.users.user.email); //for the logged in user.

  const handlePost = async () => {
    //validate the msg, it cant be empty.
    if (!postMsg.trim()) {
      alert("Post message is required."); //display an alert or set an error.
      return; // Exit the function early if validation fails.
    }
    const postData = {
      postMsg: postMsg,

      email: email,
    };

    dispatch(savePost(postData)); // Dispatch the savePost thunk from the Posts Slice.
    setpostMsg(""); //clear the text area after posting.
  };
  return (
    <div>
      <h1>SharePosts</h1>
      <Row>
        <Col>
          <Input
            id="share"
            name="share"
            placeholder="Share your thoughts..."
            value={postMsg}
            type="textarea"
            onChange={(e) => setpostMsg(e.target.value)}
          ></Input>
          <Button onClick={() => handlePost()}>PostIT</Button>
        </Col>
      </Row>
    </div>
  );
};

export default SharePosts;
