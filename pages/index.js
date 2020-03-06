import React, { Component } from 'react';
import web3JS from '../ethereum/web3';
import factoryJS from '../ethereum/factory';
import { Grid, Card, Button, Form } from 'semantic-ui-react';
import Layout from '../components/Layout.js';
import { Link } from '../routes';
import PropTypes from 'prop-types';

import { ErrorForm } from '../components/ErrorForm';

let web3;

class CampaignIndex extends Component {

    state = {
        errorMessage: ''
    };



    static async getInitialProps() {
        const factory = await factoryJS.factoryInit();
        const campaigns = await factory.methods.getDeployedCampaigns().call();
        return { campaigns: campaigns };
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

    RenderCampaigns() {
        const items = this.props.campaigns.map(address => {
            return {
                header: address,
                description: (
                    <Link route={`/campaigns/${address}`}>
                        <a>View Campaign</a>
                    </Link>
                ),
                fluid: true
            };
        });
        return <Card.Group items={items} />;
    }




    render() {
        return (
            <Layout>
                <div className="App">
                    <h3> Open Campaigns </h3>
                    <Grid >
                        <Grid.Column width={10}>
                            <div className="Cards"> {this.RenderCampaigns()} </div>
                        </Grid.Column>
                        <Grid.Column width={6}>
                            <Grid.Row>
                                <Link route="/campaigns/new">
                                    <a>
                                        <Button
                                             content='Create Campaign' icon='add' primary
                                        />
                                    </a>
                                </Link>
                            </Grid.Row>
                            <Grid.Row>
                            <Grid.Row>
                                <Link >
                                    <a>
                                        <Button
                                             content='RelayX' icon='add' primary
                                        />
                                    </a>
                                </Link>
                            </Grid.Row>
                            <Grid.Row>
                                <div className="Form"  >
                                    <Form error={!!this.state.errorMessage} style={{marginTop:10}}>
                                        <ErrorForm message={this.state.errorMessage} />
                                    </Form>
                                </div>
                            </Grid.Row>
                        </Grid.Column>
                    </Grid>
                </div >
            </Layout >

        );
    }
}

CampaignIndex.propTypes = {
    campaigns: PropTypes.array,
};

export default CampaignIndex;