import { Form, Button, Input } from 'semantic-ui-react';
import React, { Component } from 'react';

class RelayXBtn extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    to: '',
    amount: '',
    currency: '',
  };

  handleAmountInput = (event) => {
    const value = event.target.value;
    this.setState({ amount: value })
  }

  handleToInput = (event) => {
    const value = event.target.value;
    this.setState({ to: value })
  }

  onSubmit(event) {
    event.preventDefault();
    const div = document.querySelector('#relayx-button')
    window.relayone.render(div, {
      to: this.state.to,
      amount: this.state.amount,
      currency: "BSV"
    })
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }



  render() {
    return (
      <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} warning={!!this.state.hash} >
        <Form.Field>
          <label>BCV Wallet</label>
          <Input
            label='Address'
            labelPosition='right'
            placeholder='1handle, address or paymail'
            value={this.state.to}
            onChange={this.handleToInput}
          >
          </Input>
          <Input
            style={{ marginTop: 10 }}
            label='BSV'
            labelPosition='right'
            placeholder='10'
            value={this.state.amount}
            onChange={this.handleAmountInput}
          >
          </Input>
        </Form.Field>
        <div id="relayx-button">
          <Button primary> Send</Button>
        </div>
      </Form>

    )
  }
}
export default RelayXBtn;