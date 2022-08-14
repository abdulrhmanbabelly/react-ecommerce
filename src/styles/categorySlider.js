import { createUseStyles } from "react-jss";

let useCategorySliderStyles = createUseStyles((theme) => ({
    categorySlider : {
        "& .product > div" : {
            margin: 'auto',
            '& img' : { 
                width: '50% !important',
                margin: 'auto',
            }
        }
    }
}));

export default useCategorySliderStyles;