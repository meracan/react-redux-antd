
import actions from './actions';

export const getStoreProps = (store, array) => {
  const obj = {};
  array.forEach(({ store:storeId, prop }) => {
    if(!store[storeId])return console.warn("StoreId=${storeId} does not exist");
    if(!store[storeId][prop])return console.warn("prop=${prop} does not exist in store=${storeId}");
    obj[prop]=store[storeId][prop];
  });
  return obj;
};

export const getDispatchProps = (dispatch, array) => {
  const obj = {};
  array.forEach((actionId) => {
    const _f = actions[actionId];
    if(!_f)return console.warn("actionId=${actionId} does not exist");
    obj[actionId] = (obj) => dispatch(_f(obj));
  });
  return obj;
};

export const mergeProps = (stateProps, dispatchProps, ownProps) => ({ ...stateProps,...dispatchProps, ...ownProps });

export default {
  mergeProps,
  getStoreProps,
  getDispatchProps,
};
