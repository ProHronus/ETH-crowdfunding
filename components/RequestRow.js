import React, { Component } from 'react';
import { Table, Button, Label } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import campaignJS from '../ethereum/campaing.js';
import web3JS from '../ethereum/web3';
import { Router } from '../routes';

import { messageStrings } from '../ethereum/messagestrings';

let web3;

class RequestRow extends Component {

    state = {
        errorMessage: '',
        hash: '',
        confirmationNumber: 0,
        btnApproveLoading: false,
        btnFinalizeLoading: false,
    }


    onApprove = async (event) => {
        event.preventDefault();

        web3 = await web3JS.web3Init();
        this.setState({ btnApproveLoading: true, errorMessage: '' });

        const campaign = await campaignJS.campaignInit(this.props.address);
        const accounts = await web3.eth.getAccounts();

        try {
            await campaign.methods.approveRequest(this.props.id).send({
                from: accounts[0]

            }).on('transactionHash', (hash) => {
                this.setState({
                    hash: hash,
                    btnApproveLoading: false,
                });
            }).on('confirmation', (confirmationNumber) => {
                this.setState({
                    confirmationNumber: confirmationNumber
                });
                if (confirmationNumber == 1) {
                    Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
                }
            }).on('error', (error) => {
                this.setState({
                    btnApproveLoading: false,
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
                btnApproveLoading: false,
            })
        }
    }

    onFinalize = async (event) => {
        event.preventDefault();

        web3 = await web3JS.web3Init();
        this.setState({ btnFinalizeLoading: true, errorMessage: '' });

        const campaign = await campaignJS.campaignInit(this.props.address);
        const accounts = await web3.eth.getAccounts();

        try {
            await campaign.methods.finalizeRequest(this.props.id).send({
                from: accounts[0]

            }).on('transactionHash', (hash) => {
                this.setState({
                    hash: hash,
                    btnFinalizeLoading: false,
                });
            }).on('confirmation', (confirmationNumber) => {
                this.setState({
                    confirmationNumber: confirmationNumber
                });
                if (confirmationNumber == 1) {
                    Router.replaceRoute(`/campaigns/${this.props.address}/requests`);
                }
            }).on('error', (error) => {
                this.setState({
                    btnFinalizeLoading: false,
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
                btnFinalizeLoading: false,
            })
        }
    }

    FinalizerValidator() {

        if (!this.props.request.complete) {
            return (
                <Button color="green" basic disabled={this.props.btnDisabled}
                    onClick={this.onFinalize}
                    loading={this.state.btnFinalizeLoading}>
                    Finalize
                </Button>
            )
        } else {
            return (
                <Label as='p' color='blue' >
                    Finalized
                </Label>
            )
        }
    }

    ApprovedValidator() {
        
        if (this.props.request.complete) {
            return null;
        }

        if (this.props.isAlreadyApproved) {
            return (
                <Button color="green" basic disabled >
                    Approved
                </Button>
            )
        } else {
            return (
                <Button color="green" basic disabled={this.props.btnDisabled}
                    onClick={this.onApprove}
                    loading={this.state.btnApproveLoading}>
                    Approve
                </Button>
            )
        }
    }

    render() {
        const { Row, Cell } = Table;
        const { id, request, approversCount } = this.props;

        return (
            <React.Fragment>
                <Row >
                    <Cell> {id} </Cell>
                    <Cell> {request.desciption} </Cell>
                    <Cell> {request.value} </Cell>
                    <Cell> {request.recipient} </Cell>
                    <Cell> {request.approvalCount}/{approversCount} </Cell>
                    <Cell> {this.ApprovedValidator()}</Cell>
                    <Cell> {this.FinalizerValidator()}</Cell>
                </Row>
            </React.Fragment>
        );
    }
}


RequestRow.propTypes = {
    id: PropTypes.number.isRequired,
    request: PropTypes.object.isRequired,
    approversCount: PropTypes.number.isRequired,
    address: PropTypes.string.isRequired,
    btnDisabled: PropTypes.bool,
    isAlreadyApproved: PropTypes.bool

}
export default RequestRow;