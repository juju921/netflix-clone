export default function ({app, route, redirect}){
    if (route.path !== '/register/signup') {
        //we are on a protected route
        if(!app.$fire.auth.currentUser) {
            //take them to sign in page
            return redirect('/register/signup')
        }
    } else if (route.path === '/register/signup') {
        if(!app.$fire.auth.currentUser) {
            //leave them on the sign in page
        } else {
            return redirect('/')
        }
    }
}
