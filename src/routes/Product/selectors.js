import { createSelector } from 'reselect';

export const getProduct = (state) => state.product.activeProduct;
export const getProductList = (state) => state.product.productList;
export const getProductDetail = (state) => state.product.productDetail;

export const getActiveProduct = createSelector([
  getProduct,
  getProductList
],
(productId, productList) => {
  const product = productList.find(item => {
    return item.id === productId;
  });
  return (typeof product !== 'undefined') ? product : {};
});


export const getSimilarProductList = createSelector([
  getProduct,
  getProductList
],
(productId, productList) => {
  return productList.filter(item => item.id !== productId);
});
