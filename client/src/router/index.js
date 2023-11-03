import Vue from 'vue'
import Router from 'vue-router'
// Users
import UserIndex from '@/components/Users/Index'
import IndexBike from '@/components/Bikes/IndexBike'
import UserCreate from '@/components/Users/CreateUser'
import CreateBike from '@/components/Bikes/CreateBike'
import UserEdit from '@/components/Users/EditUser'
import EditBike from '@/components/Bikes/EditBike'
import UserShow from '@/components/Users/ShowUser'
import ShowBike from '@/components/Bikes/ShowBike'
import Login from '@/components/Users/login'


Vue.use(Router)
export default new Router({
    routes: [
        {
            path: '/users',
            name: 'users',
            component: UserIndex
        },
        {
            path: '/bikes',
            name: 'bikes',
            component: IndexBike
        },
        {
            path: '/user/create',
            name: 'users-create',
            component: UserCreate
        },
        {
            path: '/bike/create',
            name: 'bikes-create',
            component: CreateBike
        },
        {
            path: '/user/edit/:userId',
            name: 'user-edit',
            component: UserEdit
        },
        {
            path: '/bike/edit/:bikeId',
            name: 'bike-edit',
            component: EditBike
        },
        {
            path: '/user/:userId',
            name: 'user',
            component: UserShow
        },
        {
            path: '/bike/:bikeId',
            name: 'bike',
            component: ShowBike
        },
        // authen
{
    path: '/login',
    name: 'login',
    component: Login
   }
    ]
})