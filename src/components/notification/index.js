import React, { useEffect, useState } from 'react';
import { useNotification } from '../../hooks';
import { Alert } from 'react-bootstrap';

const Notification = (props) => {
  const { timeLimit } = props;
  const [isHide, setIsHide] = useState(true);
  const { type, message, clearingMessage } = useNotification();

  const notificationType = {
    success: 'success',
    error: 'danger'
  }

  useEffect(() => {
    if (message) {
      setIsHide(false);
    }
    setTimeout(() => {
      setIsHide(true);
      clearingMessage();
    }, timeLimit || 3000);
    // eslint-disable-next-line
  }, [message]);

  const notificationMapping = (type) => {
    return (
      <React.Fragment>
        {isHide ? null :
        <Alert variant={notificationType[type] ?? 'success'} onClose={() => setIsHide(false)} dismissible>
          <p>
          {message}
          </p>
        </Alert>
        }
      </React.Fragment>
    );
  }

  return (
      notificationMapping(type)
  );
}

export default Notification;