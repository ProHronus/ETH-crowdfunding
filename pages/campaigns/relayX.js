import React, { Component } from 'react';
import { Grid,  } from 'semantic-ui-react';
import RelayXBtn from '../../components/relayXBtn';
import Layout from '../../components/Layout';

class RelayPage extends Component {

    render() {
        return (
            <Layout>
            <Grid.Row>
                <RelayXBtn></RelayXBtn>
            </Grid.Row>
            </Layout>
        );
    }
}

export default RelayPage;