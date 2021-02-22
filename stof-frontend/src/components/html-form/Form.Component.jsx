import Axios from "axios";
import React from "react";
import { Badge, Button, Col, Container, Form, Row } from "react-bootstrap";
import { ReactMic } from "react-mic";
import { postAudioData } from "../../services/HTML.Form.Service";

function FormComponent() {
  const [selectedId, setSelectedId] = React.useState(null);

  const [record, setRecord] = React.useState(false);
  const [blob, setBlob] = React.useState(null);

  const [command, setCommand] = React.useState("");

  const startRecording = () => {
    setRecord(true);
  };

  const stopRecording = () => {
    setRecord(false);
  };

  const onData = (recordedBlob) => {
    // console.log("chunk of real-time data is: ", recordedBlob);
    return;
  };

  const onStop = (recordedBlob) => {
    console.log("recordedBlob is: ", recordedBlob);
    setBlob(recordedBlob);
  };

  const uploadAudioData = async () => {
    postAudioData(blob, setCommand);
  };

  const ids = ["email", "password", "address", "phone"];

  React.useEffect(() => {
    // Case 1: Select command
    if (command.startsWith("select")) {
      let id = command.split("select")[1].trim().toLowerCase();
      setSelectedId(id);
      if (document.getElementById(id)) {
        document.getElementById(id).style.backgroundColor = "#DAF7A6";

        for (let remainingId of ids) {
          if (remainingId !== id) {
            document.getElementById(remainingId).style.backgroundColor =
              "transparent";
          }
        }
      }
    } else if (command.startsWith("insert")) {
      let value = command.split("insert")[1].trim().toLowerCase();
      if (document.getElementById(selectedId)) {
        document.getElementById(selectedId).value = value;
      }
    } else if (command.startsWith("clear")) {
      let id = command.split("clear")[1].trim().toLowerCase();

      if (document.getElementById(id)) {
        document.getElementById(id).value = "";
      }
    }
  }, [command]);

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
        <div>
          <ReactMic
            record={record}
            className="sound-wave"
            onStop={onStop}
            onData={onData}
            strokeColor="transparent"
            backgroundColor="transparent"
            channelCount={1}
            mimeType="audio/wav"
          />
          <Button onClick={startRecording} type="button">
            Start
          </Button>
          <Button onClick={stopRecording} type="button">
            Stop
          </Button>
        </div>
      </Container>
    </Container>
  );
}

export default FormComponent;
