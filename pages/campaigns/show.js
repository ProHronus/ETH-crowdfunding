import React, { Component } from 'react';
import { Card, Grid, Button } from 'semantic-ui-react';
import web3JS from '../../ethereum/web3';
import ContributeForm from '../../components/ContributeForm';
import { Link } from '../../routes'
import PropTypes from 'prop-types';

import Layout from '../../components/layout.js';
import campaignJS from '../../ethereum/campaing.js';

let web3;

class CampaignShow extends Component {
    static async getInitialProps(props) {
        const address = props.query.address;
        const campaign = await campaignJS.campaignInit(address);
        const summary = await campaign.methods.getSummary().call();
        web3 = await web3JS.web3Init();
        
        return {
            address,
            minimumContribution: summary[0].toNumber(),
            balance: web3.utils.fromWei((summary[1].toString()), 'ether'),
            requestsCount: summary[2].toNumber(),
            approversCount: summary[3].toNumber(),
            manager: summary[4]
        };
    }

    renderCampaigns() {

        const {
            minimumContribution,
            balance,
            requestsCount,
            approversCount,
            manager
        } = this.props;

        const items = [
            {
                header: manager,
                meta: 'Address of the manager',
                description: 'The manager created this campaign and can create requests to withdraw the funds',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: minimumContribution,
                meta: 'Minimum contribution (WEI)',
                description: 'You must contibute at list this much wei to becamoe a contributer',
            },
            {
                header: requestsCount,
                meta: 'Number of Requests',
                description: 'A request for fund withdrawal from the contract of this campaign',
            },
            {

                //header: new web3Inst.utils.fromWei(balance),
                header: balance,
                meta: 'Campaign balance (ether)',
                description: 'Remaing balance of this campaign',
            },
            {
                header: approversCount,
                meta: 'Number of approvers',
                description: 'Number of contributers who donates the this campaign',

            }
        ]
        return <Card.Group items={items} />;
    }

    render() {
        return (
            <Layout>
                <h3> Campaign Show </h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            {this.renderCampaigns()}

                        </Grid.Column>
                        <Grid.Column width={6}>
                            <ContributeForm address={this.props.address} />
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link route={`/campaigns/${this.props.address}/requests`}>
                                <a>
                                    <Button primary>
                                        View Requests
                                    </Button>
                                </a>
                            </Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>
        );
    }
}

CampaignShow.propTypes = {
    address: PropTypes.string.isRequired,
    minimumContribution: PropTypes.number,
    approversCount: PropTypes.number,
    requestsCount: PropTypes.number,
    manager: PropTypes.string,
    balance: PropTypes.string,
}
export default CampaignShow;
