import { gql } from '@apollo/client';

let GET_CATEGORIES = gql`
    query getCategories {
        categories @rest(type: "category", path: "products/categories/")
    } 
`

let GET_CATEGORY_PRODUCTS = gql`
    query getCategoryProducts ($category : String) {
        categoriesProducts(category : $category) @rest(type: "category", path: "products/category/{args.category}") {
            id
            title
            price
            category
            description
            image
            rating {
                rate
                count
            }
        }
    }
`

export { GET_CATEGORIES, GET_CATEGORY_PRODUCTS };