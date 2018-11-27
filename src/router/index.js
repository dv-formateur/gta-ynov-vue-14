// Routes

// Employee
/*
 -> Tableau de bord
    -> date contrat / Solde de congés /
 -> Profile
    -> Naissance / Adresse / Nom / Prénom / Email
    -> + MAJ
 -> Son Planning
 -> Modifications planning
    -> Congés payés / RTT / Aménagement d'horaire
*/


import Vue from 'vue'
import Router from 'vue-router'

// Container
const DefaultContainer = () => import('@/components/DefaultContainer');

// Employees
const EmployeeDashboard = () => import('@/components/Employee/Dashboard');
const EmployeeProfile = () => import('@/components/Employee/Profile');
const EmployeePlanning = () => import('@/components/Employee/Planning');
const EmployeeArrangement = () => import('@/components/Employee/Arrangement');


Vue.use(Router);

export default new Router({
    routes:[
        {

            path: '/',
            name: 'Employee',
            redirect: '/dashboard',
            component: DefaultContainer,
            children: [
                {
                    path: 'dashboard',
                    name: 'Dashboard',
                    component: EmployeeDashboard
                },
                {
                    path: 'profile',
                    name: 'Profile',
                    component: EmployeeProfile
                },
                {
                    path: 'planning',
                    name: 'Planning',
                    component: EmployeePlanning
                },
                {
                    path: 'arrangement',
                    name: 'Arrangement',
                    component: EmployeeArrangement
                }

            ]
        }
    ]
});
