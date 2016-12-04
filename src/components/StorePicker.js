import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component {
  //constructor() {
  //  super();
  //  this.goToStore = this.goToStore.bind(this);
  //}
  goToStore(event) {
    // grab the text from the box
    event.preventDefault();
    var storeId = this.storeInput.value;
    // transition from / to /store/:storeId
    this.context.router.transitionTo('/store/' + storeId);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please enter a store</h2>
        <input type="text" required placeholder="Store Name"
         defaultValue={getFunName(this.goToStore)}
         ref={(input) => {this.storeInput = input}}/>
        <button type="submit">Visit Store</button>
      </form>
    )
  }
}

StorePicker.contextTypes = {
  router: React.PropTypes.object
}

export default StorePicker;