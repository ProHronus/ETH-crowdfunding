import React, { Component } from 'react';
import { Grid, Card, Button, Form, Message, Input } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Layout from '../../../components/layout.js';
import { Link, Router } from '../../../routes';
import campaignJS from '../../../ethereum/campaing.js';
import web3JS from '../../../ethereum/web3';

import { ErrorForm } from '../../../components/ErrorForm';
import { SuccessForm } from '../../../components/SuccessForm';
import { messageStrings } from '../../../ethereum/messagestrings';
import { isValueValid, valueType } from '../../../components/valueValidation'


class NewRequest extends Component {
    state = {
        etherValue: '',
        description: '',
        recipient: '',
        hash: '',
        confirmationNumber: 0,
        etherValueValid: false,
        walletAddressValid: false,
        isConfirmed: false,
        btnLoading: false,
        btnDisabled: true
    }

    static async getInitialProps(props) {
        return {
            address: props.query.address,
        };
    }

     handleUserInput = async (event, inputValueType) => {
        const value = event.target.value;
        let valueValid;
        switch (inputValueType) {
            case valueType.ETHER:
                this.setState({ etherValue:value });
                valueValid = isValueValid(value, valueType.ETHER);
                if (valueValid) {
                    await this.setState({
                        errorMessage: '',
                        etherValueValid: true,
                    })
                } else {
                    await this.setState({
                        errorMessage: 'The Ether value is invalid',
                        etherValueValid: false,
                    });
                }
                break;
            case valueType.WALLETADDRESS:
                this.setState({ recipient: value });
                valueValid = isValueValid(value, valueType.WALLETADDRESS);
                if (valueValid) {
                    await this.setState({
                        errorMessage: '',
                        walletAddressValid: true,
                    })
                } else {
                    await this.setState({
                        errorMessage: 'The wallet address is invalid',
                        walletAddressValid: false,
                    });
                }
        }
        if (this.state.etherValueValid && this.state.walletAddressValid){
            await this.setState({
                btnDisabled: false
            })
        } else {
            await this.setState({
                btnDisabled: true
            })
        }
    }

    onSubmit = async (event) => {
        event.preventDefault();
        this.setState({ btnLoading: true, errorMessage: '' });


        const campaign = await campaignJS.campaignInit(this.props.address);
        const web3 = await web3JS.web3Init();
        const { description, etherValue: value, recipient } = this.state;

        try {
            const accounts = await web3.eth.getAccounts();
            campaign.methods.createRequest(
                description,
                web3.utils.toWei(value, 'ether'),
                recipient)
                .send({
                    from: accounts[0]
                }).on('transactionHash', (hash) => {
                    this.setState({
                        hash: hash
                    });
                    this.setState({ btnLoading: false });
                }).on('confirmation', (confirmationNumber) => {
                    this.setState({
                        confirmationNumber: confirmationNumber
                    });
                    if (confirmationNumber == 3) {
                        Router.pushRoute(`/campaigns/${this.props.address}/requests`);
                    }
                }).on('error', (error) => {
                    this.setState({ btnLoading: false });
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
                errorMessage: error.message
            })
        }
    }


    render() {
        return (
            <Layout>
                <h3>Create a new request</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} warning={!!this.state.hash}>
                    <Form.Field>
                        <label>Description</label>
                        <Form.Input
                            value={this.state.description}
                            onChange={event => this.setState({ description: event.target.value })}
                        ></Form.Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Value in Ether</label>
                        <Form.Input
                            value={this.state.etherValue}
                            onChange={(e) => this.handleUserInput(e, valueType.ETHER)}
                        ></Form.Input>
                    </Form.Field>
                    <Form.Field>
                        <label>Recipient</label>
                        <Form.Input
                            value={this.state.recipient}
                            onChange={(e) => this.handleUserInput(e, valueType.WALLETADDRESS)}
                        ></Form.Input>
                    </Form.Field>
                    <Link route={`/campaigns/${this.props.address}/requests`}>
                        <a>
                            <Button >Back</Button>
                        </a>
                    </Link >
                    <Button primary disabled={this.state.btnDisabled} loading={this.state.btnLoading}>
                        Create
                    </Button>
                    <ErrorForm message={this.state.errorMessage} />
                    <SuccessForm hash={this.state.hash} confirmationNumber={this.state.confirmationNumber} />
                </Form>
            </Layout>
        )
    }
}

NewRequest.propTypes = {
    address: PropTypes.string.isRequired
}

export default NewRequest;
