import React from 'react';

class Layout extends React.Component {
  componentWillMount() {
    console.log('Product.componentWillMount');
    //this.props.setActiveProduct(this.props.productId);
    //this.props.fetchInitialSettings();

    this.props.restartModule(this.props.productId);
    //this.props.fetchInitialSettings();

  }

  componentWillUnmount() {
    console.log('Product.componentWillUnmount');
    this.props.resetSettings();
  }

  render() {
    const props = this.props;
    return (
      <div>
        <h2>Product Page</h2>
        <ul>
          <li>ID: {props.product.id}</li>
          <li>Name: {props.product.name}</li>
          <li>Price: {props.product.price}</li>
          <li>Stock: {props.product.stock}</li>
        </ul>
        <h2>Similar Products</h2>
        <select onChange={(e) => props.restartModule(e.target.value)} value={'*'}>
          <option value={'*'}>- Please Select -</option>
          {props.similarProductList.map(item =>
            <option key={item.id} value={item.id}>{item.name} (id: {item.id}) </option>
          )}
        </select>
      </div>
    );
  }

}

Layout.propTypes = {
  productId: React.PropTypes.number,
  product: React.PropTypes.object,
  similarProductList: React.PropTypes.array,
  fetchInitialSettings: React.PropTypes.func.isRequired,
  resetProductDetail: React.PropTypes.func.isRequired,
  resetSettings: React.PropTypes.func.isRequired,
  setActiveProduct: React.PropTypes.func.isRequired
};

export default Layout;
