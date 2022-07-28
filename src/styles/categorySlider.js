import { createUseStyles } from "react-jss";

let useCategorySliderStyles = createUseStyles((theme) => ({
    categorySlider : {
        "& .product > div" : {
            margin: 'auto',
            boxShadow: 'none !important',
            '& img' : { 
                width: '20vw !important',
                margin: 'auto',
            }
        }
    }
}));

export default useCategorySliderStyles;