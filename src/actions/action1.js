import {NAME,CLICK_BUTTON} from '../constants';
const clickButton = (payload) => (async (dispatch, getState) => {
  dispatch({ type: NAME, payload:"Last" });
});
export default {
  [CLICK_BUTTON]:clickButton,
};