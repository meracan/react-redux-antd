import { updateIntl } from 'react-intl-redux'
import {messages} from 'localization'

import {NAME,LASTNAME} from './constants';
import {STORE1,CLICKLNG,CLICK1,CLICK2,THEMEID,CLICKTHEME,STORE2,A} from './constants';


const click1 = () => (async (dispatch, getState) => {
  const {[STORE1]:{[NAME]:name}}=getState();
  const payload=name=="John"?"Peter":"John";
  dispatch({ type: NAME, payload});
});
const click2 = (payload) => (async (dispatch, getState) => {
  dispatch({ type: LASTNAME, payload:"Middle" });
});

const clicklng=(payload) => (async (dispatch, getState) => {
  const {intl:{locale:_locale}}=getState();
  const locale=_locale=="en"?"fr":"en";
  dispatch(updateIntl({locale,messages:messages[locale]}))
});

const clickTheme=(payload) => (async (dispatch, getState) => {
  const {[STORE1]:{[THEMEID]:_themeId}}=getState();
  const themeId=_themeId=="default"?"dark":"default";
  dispatch({ type: THEMEID, payload:themeId })
});


export default {
  [CLICK1]:click1,
  [CLICK2]:click2,
  [CLICKLNG]:clicklng,
  [CLICKTHEME]:clickTheme
};
