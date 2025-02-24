import {
  Button,
  Col,
  Label,
  Container,
  Row,
  FormGroup,
  Input,
} from "reactstrap";
const SharePosts = () => {
  return (
    <>
      <Row>
        <Col>
          <Input
            id="share"
            name="share"
            placeholder="Share What You're Thinking..."
            type="textarea"
          />
          <Button>PostIt</Button>
        </Col>
      </Row>
    </>
  );
};

export default SharePosts;
