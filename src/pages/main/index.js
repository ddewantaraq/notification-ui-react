import React from 'react';
import { useNotification } from '../../hooks';
import { 
  Container, 
  Row, 
  Col,
  Jumbotron,
  Button
} from 'react-bootstrap';

const Main = () => {
    const { notificationSuccess, notificationError } = useNotification();

    const showAlert = (type) => {
      const alertMessage = {
        success: notificationSuccess,
        error: notificationError
      }

      alertMessage[type](`this is ${type} message`)
    };

    return (
        <React.Fragment>
          <Container className="p-3">
            <Jumbotron>
              <Row>
                <Col>
                  <Button onClick={() => showAlert('success')}>Show Success Alert</Button>
                </Col>
                <Col>
                  <Button onClick={() => showAlert('error')}>Show Error Alert</Button>
                </Col>
              </Row>
            </Jumbotron>
          </Container>
        </React.Fragment>
    );
}

export default Main;