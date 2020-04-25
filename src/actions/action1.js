const clickButton = (payload) => (async (dispatch, getState) => {
  dispatch({ type: 'name', payload:"Last" });
});
export default {
  clickButton,
};