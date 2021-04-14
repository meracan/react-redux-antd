import {messages} from 'localization';
import {STORE1,STORE2,THEMEID,THEME,NAME,LASTNAME,A,B} from './constants';
import themes from 'style/theme';

export default {
  intl:{
      defaultLocale: 'en',
      locale: 'en',
      messages: messages['en']
  },
  [STORE1]:{
    [THEMEID]:'default',
    [THEME]:themes['default'],
    [NAME]:"John",
    [LASTNAME]:"Doe",
  },
  [STORE2]:{
     [A]:'A',
    [B]:'B',
  }
}