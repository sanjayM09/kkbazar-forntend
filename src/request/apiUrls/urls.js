// (Mention API Names on page)
const GETEXAMPLE = 'example/'; // ( Mention request )

// =======  Auth Start ======
const LOGIN = 'login'; // ( Auth Login Post)




// =======  Auth End ======

const HOMEBANNER_GET_DATA = '/carousel/view' // Saras ------  Home page banner get
const HOME_CATEGORIE_GET_ATA = 'category' // Saras ------  Home page category get
const HOME_NEWPRODUCT_GET_DATA = 'dashboard1/view' // Saras ------  Home page new product get
const HOME_PRODUCT_WITHDEAILS_GET_DATA = 'dashboard2/view' // Saras ------  Home page product with details get
const HOME_RECOMMEMND_BANNER_GET_DATA = 'carousel2/view' // Saras ------  Home page RECOMMEMND BANNER details get
const HOME_WISHLIST_POST = '/wishList/save'  // Saras ------  Home page WISHLIST details get
const WHISHLIST_PRODUCT_GET = 'wishListProductDetailByUser'    // Saras ------  Home page WHISHLIST PRODUCT_GET details get
const WHISHLIST_MOVECART_POST = 'cartDetails/save'    // Saras ------  Home page WHISHLIST MOVECART details get
// const ORDER_PRODUCT_VIEW = 'orderItems/detail/view'    // Saras ------  Home page Order Product view details get
const ORDER_PRODUCT_VIEW = 'order/detail'    // Saras ------  Home page Order Product view details get
const PRODUCT_FEEDBACK_POST = 'review/save'    // Saras ------  Home page Order Product review details post
const PRODUCT_FEEDBACK_Get = 'review/data'    // Saras ------  Home page Order Product review details post
const PRODUCT_CANCELL_POST = 'orderStatus'    // Saras ------  Home page Order Product cancell details post
const ORDER_RETURN_CANCEL_POST = 'orderReturn/status/cancelled'
const PRODUCT_WISHLIST_POST_RESPONSE = '/wishList/app/save'    // Saras ------  Home page Order Product cancell details post
const PRODUCT_MEMBER_GET_LIST = 'orderList/item'    // Saras ------  Home page OrderorderList item details post
const WHISHLIST_MOVECART_GET = 'cartDetails/save'    // Saras ------  Home page WHISHLIST MOVECART details get
const CART_CAROUSELPAGE_GET = ''    // Saras ------  Home page CAROUSELPAGE get
const PRODUCT_CONFIRM_PAYMENT = 'orderItems1/save'   // Saras ------  Payment product confirm save
const PRODUCT_BANK_STATEMENTPOST = 'bank/save'   // Saras ------  Poduct backstatement post save
const PRODUCT_RETURN_POST = 'orderReturn/save'   // Saras ------  order Return post save
const PRODUCT_RECENTFILTER = 'product/category/view'   // Saras ------  order Recent filter save

const CATEGORY_LIST = '/product/category/view' // Albin
const ALL_CATEGORY_LIST = '/category' // Albin
const ALL_PRODUCT_LIST = '/product/category/view/' // Albin
const SINGLE_PRODUCT = '/product/views/' // Albin
const ALL_CART_LIST = 'getAllCartDetailsByUserId/' // Albin
const ADD_CART_QUANTITY = '/cart/web/edit/' // Albin
const ADD_CART_DELETE = '/cart/web/delete/' // Albin

// =======  Register  ======

const REGISTER_POST = '/user/save' // Jeffrin

// =======  Users   ======

const USERS_GET = '/user/detail/view' // Jeffrin
const USERS_PUT = '/user/edit/'
const GETPERSONALDETAILS = 'company'

// =======  Change Password   ======

const CHANGE_PASSWORD_POST = '/user/changepassword' // Jeffrin

const HOME_FILTER_DATA = '/product/search' // Albin

// =======  FeedBack   ======

const FEEDBACKPOST = '/contact/save'



// =======  Address   ======

const ADDRESS_POST = '/address/save' // Jeffrin
const ADDRESS_GET = '/address/view/user/' // Jeffrin
const ADDRESS_PUT = '/address/'

export const APIURLS = {
    // Auth 
    LOGIN,   // --> Auth Login Post

    // Example
    GETEXAMPLE,  //  --> Example

    HOMEBANNER_GET_DATA,
    HOME_CATEGORIE_GET_ATA,
    HOME_NEWPRODUCT_GET_DATA,
    HOME_PRODUCT_WITHDEAILS_GET_DATA,
    HOME_RECOMMEMND_BANNER_GET_DATA,
    HOME_WISHLIST_POST,
    WHISHLIST_PRODUCT_GET,
    WHISHLIST_MOVECART_POST,
    ORDER_PRODUCT_VIEW,
    PRODUCT_FEEDBACK_POST,
    PRODUCT_FEEDBACK_Get,
    PRODUCT_CANCELL_POST,
    ORDER_RETURN_CANCEL_POST,
    PRODUCT_MEMBER_GET_LIST,
    CART_CAROUSELPAGE_GET,
    PRODUCT_CONFIRM_PAYMENT,
    PRODUCT_BANK_STATEMENTPOST,
    PRODUCT_RETURN_POST,
    PRODUCT_RECENTFILTER,
    WHISHLIST_MOVECART_GET,
    PRODUCT_WISHLIST_POST_RESPONSE,

    CATEGORY_LIST, // Albin
    ALL_CATEGORY_LIST, // Albin
    ALL_PRODUCT_LIST, // Albin 
    SINGLE_PRODUCT, // Albin 
    ADD_CART_DELETE, // Albin 

    REGISTER_POST,  // Jeffrin
    USERS_GET,  // Jeffrin
    USERS_PUT, //Jeffrin
    GETPERSONALDETAILS, // Jeffrin

    CHANGE_PASSWORD_POST, // Jeffrin
    
    ADDRESS_POST,// Jeffrin
    ADDRESS_GET, //Jeffrin
    ADDRESS_PUT, // Jeffrin
    ALL_CART_LIST, //Albin
    ADD_CART_QUANTITY, //Albin
    HOME_FILTER_DATA, //Albin

    FEEDBACKPOST // Jeffrin



}