import { NetWorkError } from "@router/components/NetWorkError"
import PageNotFound from "@router/components/PageNotFound"
import UserSignin from "@modules/Auth/Partials/UserSignin"
import { Profile } from "@modules/Profile"
import RegisterForm from "@modules/Auth/Partials/RegisterForm"
import { MainProductList } from "@modules/ProductList/Partials/MainProductList"
import { HomeMain } from "@modules/Home/HomeMain"
import { WishListMain } from "@modules/WishList"

export const anonymous = [
    {       
        routePath: '*',   // ----------- Page Not Fonund
        Component: PageNotFound,
    },
    {       
        routePath: 'networkerror',  // ----------- Network Error
        Component: NetWorkError,
    },
    {
        routePath: '/signin',  // ----------- Signin Page
        Component: UserSignin,
    },
    {
        routePath:'/registerform',  
        Component:RegisterForm,
    }
    // {
    //     routePath: '/register',
    //     Component: RegisterMenu,
    // },
    // {
    //     routePath: '/password',
    //     Component: PasswordForm,
    // },
]

export const adminAuthenticated = [
    {       
        routePath: '*',   // ----------- Page Not Fonund
        Component: PageNotFound,
    },
    {       
        routePath: 'networkerror',  // ----------- Network Error
        Component: NetWorkError,
    },
    {
        routePath:'',  // ----------- Dashboard
        Component:HomeMain, 
    },
    {
        routePath:'whishlist',  // ----------- Dashboard
        Component:WishListMain, 
    },
    // {
    //     routePath:'productsPage',
    //     Component:MainProductList, 
    // }
    
]

export const userAuthenticated = [
    {      
        routePath: '*',   // ----------- Page Not Fonund
        Component: PageNotFound,
    },
    {      
        routePath: 'networkerror',  // ----------- Network Error
        Component: NetWorkError,
    },
    {
        routePath:'',   // ----------- Dashboard
        Component:Profile,
    },
    {
        routePath:'/registerform',   // ----------- Dashboard
        Component:RegisterForm,
    }

]