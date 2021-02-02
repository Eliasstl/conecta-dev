import { createMuiTheme} from '@material-ui/core/styles';
import { colors} from '@material-ui/core';

const theme = createMuiTheme({
    palette: {
        type: 'light',
        primary: {
          dark: colors.indigo.A700,
          main: colors.indigo.A400,
          light: colors.indigo.A200,
        },
        secondary: {
            dark: colors.orange.A700,
            main: colors.orange.A700,
            light: colors.orange.A200,
          },
          background: {
            default: colors.common.white,
            dark: '#f4f6f8',
            paper: colors.common.white,
          },
          text: {
            primary: colors.blueGrey[900],
            secondary: colors.blueGrey[600],
          },
        typography:{
            h6:{
                fontWeight: 500,
                fontSize:14,
                letterSpacing:'-0.05px'


            }
        }
    }

});

export default  theme;