import {NAME,CLICK_BUTTON,CLICK_BUTTON2} from '../constants';
const clickButton = (payload) => (async (dispatch, getState) => {
  dispatch({ type: NAME, payload:"Last" });
});
const clickButton2 = (payload) => (async (dispatch, getState) => {
  dispatch({ type: NAME, payload:"Middle" });
});
export default {
  [CLICK_BUTTON]:clickButton,
  [CLICK_BUTTON2]:clickButton2,
};