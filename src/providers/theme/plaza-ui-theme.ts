import {createTypography} from '@plaza-ui/styles';
import {completeSystemColor} from '@plaza-ui/styles/lib/createColors';
import createTheme from '@plaza-ui/styles/lib/createTheme';

const colors = {
  primary: '#F89A01',
  secondary: '#1A8CE7',
  success: '#00AD7C',
  danger: '#F54D42',
  info: '#1A8CE7',
  warning: '#FACF5A',
  background: '#FFFFFF',
  backgroundVariant: '#FAFAFA',
  backgroundVariant2: '#F2F2F2',
  stroke: '#D6D6D6',
  strokeVariant: '#E8E8E8',
  text: {
    primary: '#26373B',
    secondary: '#6B8289',
    invert: '#FFFFFF',
    price: '#26373B',
  },
};

const plazaSystemColors = {
  primary: completeSystemColor(colors.primary),
  secondary: completeSystemColor(colors.secondary),
  success: completeSystemColor(colors.success),
  danger: completeSystemColor(colors.danger),
  info: completeSystemColor(colors.info),
  warning: completeSystemColor(colors.warning),
  background: completeSystemColor(colors.background),
  backgroundVariant: completeSystemColor(colors.backgroundVariant),
  backgroundVariant2: completeSystemColor(colors.backgroundVariant2),
  stroke: completeSystemColor(colors.stroke),
  strokeVariant: completeSystemColor(colors.strokeVariant),
  text: colors.text,
};

const typography = createTypography({
  rtlFontFamily: 'IRANYekan,Sans-serif',
});

const plazaUiTheme = createTheme({
  colors: plazaSystemColors,
  typography,
});

export default plazaUiTheme;
