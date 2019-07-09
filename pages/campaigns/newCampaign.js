import React, { Component } from 'react';
import { Form, Button, Input } from 'semantic-ui-react';
import Layout from '../../components/Layout.js';
import factoryJS from '../../ethereum/factory';
import web3JS from '../../ethereum/web3';
import { Router } from '../../routes'

import { ErrorForm } from '../../components/ErrorForm';
import { SuccessForm } from '../../components/SuccessForm';
import { messageStrings } from '../../ethereum/messagestrings';
import { isValueValid, valueType } from '../../components/valueValidation'


let web3;


class NewCampaign extends Component {
    state = {
        minimumContribution: '',
        errorMessage: '',
        hash: '',
        confirmationNumber: 0,
        isConfirmed: false,
        btnLoading: false,
        btnDisabled: true
    };

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
        this.setState({ minimumContribution: value },
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
                        errorMessage: 'The Minimum Contribution value is invalid',
                        valueValid: false,
                        btnDisabled: true,
                    });
                }
            })
    }

    onSubmit = async (event) => {
        if (this.state.minimumContribution == '') {
            this.setState({
                errorMessage: "Please, eneter the value"
            })
        } else {
            event.preventDefault();
            await this.setState({ btnLoading: true, errorMessage: '', hash: '', confirmationNumber: 0 });

            const factory = await factoryJS.factoryInit();

            try {
                const accounts = await web3.eth.getAccounts();
                await factory.methods.createCampaign(this.state.minimumContribution).send({
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
                        Router.pushRoute('/');
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
                    errorMessage: error.message,
                    btnLoading: false,
                })
            }
        }
    }

    render() {
        return (
            <Layout>
                <h3>Create Campaign</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} warning={!!this.state.hash} >
                    <Form.Field>
                        <label>Minimum Contribution</label>
                        <Input
                            label='WEI'
                            labelPosition='right'
                            placeholder='100 WEI'
                            value={this.state.minimumContribution}
                            onChange={this.handleUserInput}
                        >
                        </Input>
                    </Form.Field>
                    <Button primary disabled={this.state.btnDisabled} loading={this.state.btnLoading}>Create</Button>
                    <ErrorForm message={this.state.errorMessage} />
                    <SuccessForm hash={this.state.hash} confirmationNumber={this.state.confirmationNumber} />
                </Form>
            </Layout>
        );
    }
}

export default NewCampaign;