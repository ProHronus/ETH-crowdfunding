import React, { Component } from 'react';
import Layout from '../../../components/Layout.js';
import { Grid, Table, Button, Form } from 'semantic-ui-react';
import { Link } from '../../../routes';
import campaignJS from '../../../ethereum/campaing.js';
import PropTypes from 'prop-types';
import RequestRow from '../../../components/RequestRow'
import web3JS from '../../../ethereum/web3';
import { ErrorForm } from '../../../components/ErrorForm';
import { SuccessForm } from '../../../components/SuccessForm';
import { messageStrings } from '../../../ethereum/messagestrings';

let web3;
let newRequestsApproved;

class RequstIndex extends Component {

    state = {
        errorMessage: '',
        btnDisabled: true,
        dataUpdated: false,
        requestsApproved: []
    }

    static async getInitialProps(props) {
        const address = props.query.address;
        const campaign = await campaignJS.campaignInit(address);
        const requestCount = +await campaign.methods.getRequestsCount().call();
        const approversCount = +await campaign.methods.approversCount().call();
        web3 = await web3JS.web3Init();

        const requestsRaw = await Promise.all(
            Array(requestCount).fill().map((element, index) => {
                return campaign.methods.requests(index).call();
            })
        );

        const requests = requestsRaw.map((element) => {
            element.approvalCount = element.approvalCount.toNumber();
            element.value = web3.utils.fromWei((element.value.toString()), 'ether');
            return element;
        })

        const initRequestsApproved = Array(requestCount).fill().map((element) => {
            return false;
        });

        return {
            address,
            requests,
            requestCount,
            approversCount,
            initRequestsApproved
        };
    }

    async componentDidMount() {
        await this.checkNetwork();
        this.checkIsRequestApproved();
    }

    async checkIsRequestApproved() {
        this.setState({ requestsApproved: this.props.initRequestsApproved })
        let accounts;
        let campaign;
        try {
            campaign = await campaignJS.campaignInit(this.props.address);
            accounts = await web3.eth.getAccounts();
        } catch (error) {
            console.log(error);

        }
        if (typeof(accounts) !== 'undefined') {
            newRequestsApproved = await Promise.all(
                Array(this.props.requestCount).fill().map((element, index) => {
                    return campaign.methods.isAlreadyApproved(index).call({ from: accounts[0] });
                })
            );
            this.setState({
                dataUpdated: true
            });
        }
    }

    componentDidUpdate() {
        if (this.state.dataUpdated) {
            this.setState({
                dataUpdated: false,
                requestsApproved: newRequestsApproved
            });
        }
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

    renderRows() {
        return this.props.requests.map((request, index) => {
            return <RequestRow
                key={index}
                id={index}
                isAlreadyApproved={this.state.requestsApproved[index]}
                approversCount={this.props.approversCount}
                request={request}
                address={this.props.address}
                btnDisabled={this.state.btnDisabled}
            />
        })
    }

    render() {
        return (
            <Layout>
                <h3>
                    List of Requests
                </h3>
                <Link route={`/campaigns/${this.props.address}`}>
                    <a>
                        <Button >Back</Button>
                    </a>
                </Link >
                <Link route={`/campaigns/${this.props.address}/requests/new`}>
                    <a>
                        <Button primary style={{ marginBottom: 10 }}>
                            Add Request
                        </Button>
                    </a>
                </Link>
                <Form error={!!this.state.errorMessage} warning={!!this.state.hash}>
                    <ErrorForm message={this.state.errorMessage} />
                    <SuccessForm hash={this.state.hash} confirmationNumber={this.state.confirmationNumber} />
                </Form>
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Description</Table.HeaderCell>
                            <Table.HeaderCell>Amount</Table.HeaderCell>
                            <Table.HeaderCell>Reciepient</Table.HeaderCell>
                            <Table.HeaderCell>Approvals</Table.HeaderCell>
                            <Table.HeaderCell>Approve</Table.HeaderCell>
                            <Table.HeaderCell>Finalize</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {this.renderRows()}
                    </Table.Body>
                </Table>
                <div> Found {this.props.requestCount} requests</div>
            </Layout>

        )
    }
}

RequstIndex.propTypes = {
    address: PropTypes.string.isRequired,
    requests: PropTypes.arrayOf(PropTypes.object),
    approversCount: PropTypes.number.isRequired,
    requestCount: PropTypes.number.isRequired,
    initRequestsApproved: PropTypes.any
}

export default RequstIndex;