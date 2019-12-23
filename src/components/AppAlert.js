import React from 'react';
import { Alert } from 'reactstrap';

const AppAlert = ({
  alertType,
  alertText
}) => {
  return (
    <div>
      <Alert color={alertType}>
        {alertText}
      </Alert>
    </div>
  );
};

export default AppAlert;
