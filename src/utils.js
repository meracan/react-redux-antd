
import actions from './actions';

export const getStoreProps = (store,_class, array) => {
  const obj = {};
  const name=_class.name;
  const defs=_class.defaultProps;
  if(!defs){console.warn(`Class ${name} needs defaultProps`);return obj;}
  
  array.forEach(([storeId, key,prop]) => {
    if(!defs[prop])return console.warn(`Prop=${prop} does not exist`);
    console.log(storeId,key,prop);
    if(!store[storeId])return console.warn(`StoreId=${storeId} does not exist`);
    if(!store[storeId][key])return console.warn(`constant=${key} does not exist in store=${storeId}`);
    obj[prop]=store[storeId][key];
  });
  return obj;
};

export const getDispatchProps = (dispatch,_class, array) => {
  const obj = {};
  const name=_class.name;
  const defs=_class.defaultProps;
  if(!defs){console.warn(`Class ${name} needs defaultProps`);return obj;}
  
  array.forEach(([key,prop]) => {
    if(!defs[prop])return console.warn(`Prop=${prop} does not exist in ${name}`);
    const _f = actions[key];
    if(!_f)return console.warn(`actionId=${key} does not exist`);
    obj[prop] = (obj) => dispatch(_f(obj));
  });
  return obj;
};

export const mergeProps = (stateProps, dispatchProps, ownProps) => ({ ...stateProps,...dispatchProps, ...ownProps });

export default {
  mergeProps,
  getStoreProps,
  getDispatchProps,
};
