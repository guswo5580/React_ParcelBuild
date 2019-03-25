import Typography from 'typography';

const typography = new Typography({
    baseFontSize : '18px',
    baseLineHeight : 1.666,
    googleFonts : [
        {
            name : 'Montserrat',
            styles : ["700"]
        },
        {
            name : 'Open Sans',
            styles : ['400']
        }        
    ],
    headerFontFamily : ["Montserrat", "Helvetica Neue", "sans-serif"],
    bodyFontFamily : ["Open Sans", "sans-serif"]
});

typography.injectStyles();
//위의 js 구문들을 css로 변경시켜 삽입

export default typography; 