import React from 'react'
import { Message } from 'semantic-ui-react'
import PropTypes from 'prop-types'


const successMessages = {
    HASHRECIEVED: {
        HEADER: 'Transaction has been sent.', CONTENT: 'Please wait for confirmation.'
    },
    CONFRECIEVED: {
        HEADER: 'Confirmation recieved', CONTENT: 'Your trasaction was confirmed. Number of confirmations: '
    }
};

function HashRecieved(props) {
    return (
        <Message floated='right' warning >
            <Message.Header>  {successMessages.HASHRECIEVED.HEADER} </Message.Header>
            <p>{successMessages.HASHRECIEVED.CONTENT} <br />
                Tx hash: <b style= {{overflowWrap:'break-word'}}>{props.hash}</b>
            </p>
        </Message>
    )
}

HashRecieved.propTypes = {
    hash: PropTypes.string,
  };

function Confirmed(props) {
    return (
        <Message floated='right' positive >
            <Message.Header >  {successMessages.CONFRECIEVED.HEADER} </Message.Header>
            <p>{successMessages.CONFRECIEVED.CONTENT}{props.confirmationNumber} <br />
                Tx hash: <b style= {{overflowWrap:'break-word'}}>{props.hash}</b>
            </p>
        </Message>
    )
}

Confirmed.propTypes = {
    hash: PropTypes.string,
    confirmationNumber: PropTypes.number
  };

export const SuccessForm = (props) => {
    if (props.hash !== 'undefined' && props.confirmationNumber > 0) {
        return <Confirmed hash={props.hash} confirmationNumber={props.confirmationNumber} />
    }
    else {
        return <HashRecieved hash={props.hash} />
    }
};





