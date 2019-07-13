import React, { Component } from 'react';
import { Form, Input, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import web3JS from '../ethereum/web3';
import campaignJS from '../ethereum/campaing';
import { Router } from '../routes';

import { ErrorForm } from './ErrorForm';
import { SuccessForm } from './SuccessForm';
import { messageStrings } from '../ethereum/messagestrings';
import { isValueValid, valueType } from './valueValidation'


let web3;

class ContributeForm extends Component {

    state = {
        value: '',
        valueValid: false,
        errorMessage: '',
        hash: '',
        confirmationNumber: 0,
        isConfirmed: false,
        btnLoading: false,
        btnDisabled: true
    }

    componentDidMount() {
        this.checkNetwork();
    }

    async checkNetwork() {
        let errorMessage;
        try {
            web3 = await web3JS.web3Init();
            errorMessage = web3JS.isError();
        } catch (error) {
            this.setState({ errorMessage: error });
        }
        if (errorMessage) {
            this.setState({ errorMessage: errorMessage });
        } else {
            this.setState({ btnDisabled: false });
        }
    }

    handleUserInput = (event) => {
        const value = event.target.value;
        this.setState({ value: value },
            () => {
                let valueValid = isValueValid(value, valueType.ETHER);
                if (valueValid) {
                    this.setState({
                        errorMessage: '',
                        valueValid: true,
                        btnDisabled: false
                    })
                } else {
                    this.setState({
                        errorMessage: 'The Ether value is invalid',
                        valueValid: false,
                        btnDisabled: true,
                    });
                }
            })
    }

    onSubmit = async (event) => {
        if (this.state.value == '') {
            this.setState({
                errorMessage: "Please, eneter the value"
            })
        } else {
            event.preventDefault();
           await this.setState({ btnLoading: true, errorMessage: '', hash: '', confirmationNumber: 0 });
            const campaign = await campaignJS.campaignInit(this.props.address);

            try {
                const accounts = await web3.eth.getAccounts();
                campaign.methods.contribute().send({
                    from: accounts[0],
                    value: web3.utils.toWei(this.state.value, 'ether'),
                }).on('transactionHash', (hash) => {
                    this.setState({
                        hash: hash,
                        btnLoading: false,
                        value: ''
                    });
                }).on('confirmation', (confirmationNumber) => {
                    this.setState({
                        confirmationNumber: confirmationNumber
                    });
                    if (confirmationNumber == 1) {
                    Router.replaceRoute(`/campaigns/${this.props.address}`);
                    }
                }).on('error', (error) => {
                    this.setState({
                        btnLoading: false,
                        value: ''
                    });
                    if (error.message.includes('User denied transaction')) {
                        this.setState({
                            errorMessage: messageStrings.TXDENIED
                        });
                    } else {
                        this.setState({
                            errorMessage: error.message
                        })
                    }
                });
            } catch (error) {
                this.setState({
                    errorMessage: error.message,
                    btnLoading: false,
                })
            }
        }
    }


    render() {
        return (

            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} warning={!!this.state.hash}>
                <Form.Field>
                    <label>Amount to contribute</label>
                    <Input
                        label="ether"
                        labelPosition='right'
                        fluid
                        value={this.state.value}
                        onChange={this.handleUserInput}
                        error
                    />
                    <ErrorForm message={this.state.errorMessage} />
                    <SuccessForm hash={this.state.hash} confirmationNumber={this.state.confirmationNumber} />
                    <Button primary style={{marginTop:10}} disabled={this.state.btnDisabled} loading={this.state.btnLoading}>Contribute</Button>

                </Form.Field>
            </Form>
        )
    }

}

ContributeForm.propTypes = {
    address: PropTypes.string.isRequired
};

export default ContributeForm;