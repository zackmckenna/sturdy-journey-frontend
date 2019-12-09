import React from 'react';
import { Alert } from 'reactstrap';

const Notification = ({notificationText, notificationColor}) => {

  if (notificationText) {
    return (
      <div>
        <Alert color={notificationColor}>
          {notificationText}
        </Alert>
      </div>
    );
  } else {
    return <> </>
  }
};

export default Notification;
