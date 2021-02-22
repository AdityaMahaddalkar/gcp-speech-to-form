import React from "react";
import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";
import { useReactMediaRecorder } from "react-media-recorder";
import { postMediaBlob } from "../../services/HTML.Form.Service";

function FormComponent() {
  const [selectedId, setSelectedId] = React.useState(null);

  const {
    status,
    startRecording,
    stopRecording,
    mediaBlobUrl,
  } = useReactMediaRecorder({
    blobOptions: { type: "audio/wav" },
    mediaStreamConstraints: { audio: true, video: false },
  });

  const uploadAudioData = () => {
    console.log(`Type of data : ${typeof mediaBlobUrl}`);
    console.log(`Data: ${mediaBlobUrl}`);

    if (mediaBlobUrl) {
      postMediaBlob(mediaBlobUrl);
    }
  };

  const ids = ["email", "password", "address", "phone"];

  return (
    <Container className="mt-5">
      <div>Welcome to forms</div>
      <Container className="my-4">
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  id={ids[0]}
                  type="email"
                  placeholder="Enter email"
                ></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  id={ids[1]}
                  type="password"
                  placeholder="Enter password"
                ></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Address</Form.Label>
                <Form.Control id={ids[2]} as="textarea" rows={3}></Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" id={ids[3]}></Form.Control>
              </Form.Group>
            </Col>
          </Row>
          <Button variant="primary" type="button" onClick={uploadAudioData}>
            Submit
          </Button>
        </Form>
      </Container>
      <Container className="my-4">
        <Row>
          <Col>
            Status{" "}
            <h4>
              <Badge variant="info">{status}</Badge>
            </h4>
          </Col>
          <Col>
            <Button variant="primary" type="button" onClick={startRecording}>
              Start Recording
            </Button>
          </Col>
          <Col>
            <Button variant="primary" type="button" onClick={stopRecording}>
              Stop Recording
            </Button>
          </Col>
          <Col>
            <audio src={mediaBlobUrl} controls></audio>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default FormComponent;
