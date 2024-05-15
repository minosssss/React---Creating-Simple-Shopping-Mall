
import GlobalLayout from './pages/_layout'
import MainPage from './pages/index'
import ProductList from './pages/products/index'
import ProductDetail from './pages/products/[id]'


export const routes = [
    {
        path:"/",
        element: <GlobalLayout />,
        children: [
            { path : "/", element: <MainPage />, index:true },
            { path : "/products", element: <ProductList />, index:true },
            { path : "/products/:id", element: <ProductDetail /> },
            // { path : "/", element: <DynamicIndex />, index:true },
            // { path : "/", element: <DynamicIndex />, index:true },
        ]
    }
]

export const pages = [
    {route : '/'},
    {route : '/cart'},
    {route : '/payment'},
    {route : '/products'},
    {route : '/products/:id'},
    
]