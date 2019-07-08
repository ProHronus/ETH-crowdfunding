import React from 'react';
import { Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'


export const ErrorForm = (props) => {
  return (
    <Message
      header='Oops' floated='right' error content={props.message}
    >
    </Message>
  );
};

ErrorForm.propTypes = {
  message: PropTypes.any,
};



