
import actions from './actions';

export const getStoreProps = (store, array) => {
  const obj = {};
  array.forEach(({ storeID, props }) => {
    props.forEach((prop) => {
      if(store[storeID] && typeof store[storeID][prop]!=='undefined')
        obj[prop] = store[storeID][prop]; 
    });
  });
  return obj;
};

export const getDispatchProps = (dispatch, props) => {
  const obj = {};
  props.forEach((prop) => {
    const _f = actions[prop];
    if (_f)obj[prop] = (obj) => dispatch(_f(obj));
  });
  return obj;
};

export const mergeProps = (stateProps, dispatchProps, ownProps) => ({ ...stateProps,...dispatchProps, ...ownProps });

export default {
  mergeProps,
  getStoreProps,
  getDispatchProps,
};
