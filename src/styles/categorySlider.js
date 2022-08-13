import { createUseStyles } from "react-jss";

let useCategorySliderStyles = createUseStyles((theme) => ({
    categorySlider : {
        "& .product > div" : {
            margin: 'auto',
            boxShadow: 'none !important',
            '& img' : { 
                width: '50% !important',
                margin: 'auto',
            }
        }
    }
}));

export default useCategorySliderStyles;