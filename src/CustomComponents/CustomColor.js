const CustomColor =
{
// AppColor:'#6a5acd',    
AppColor:'#FEDBD0',    
ButtonColor:'#FFFBEB',
AQUA_GREEN: '#1A5276',
RED: '#B03A2E',
ORANGE: '#DC7633',
PURPLE: '#8E44AD',
GRAY: '#566573',
a:'rgba(255, 0, 255, 1.0)',
TransParentColor:'#ff00ff00',
c:'rgb(255, 0, 255)',
d:'#ff00ff',
e:'#d5af69',
f:'rgba(213,175,105,255)',
g:'#42275a',
}
export default CustomColor;


const palette = {
    purple: '#5A31F4',
    green: '#0ECD9D',
    red: '#CD0E61',
    black: '#0B0B0B',
    white: '#F0F2F3',
  }
  
  export const theme = {
    colors: {
      background: palette.white,
      foreground: palette.black,
      primary: palette.purple,
      success: palette.green,
      danger: palette.red,
      failure: palette.red,
    },
    spacing: {
      s: 8,
      m: 16,
      l: 24,
      xl: 40,
    },
    textVariants: {
      header: {
        fontFamily: 'Raleway',
        fontSize: 36,
        fontWeight: 'bold',
      },
      body: {
        fontFamily: 'Merriweather',
        fontSize: 16,
      },
    }
  };
  
  export const darkTheme = {
    ...theme,
    colors: {
      ...theme.colors,
      background: palette.black,
      foreground: palette.white,
    }
  }