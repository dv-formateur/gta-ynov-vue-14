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

//import

Vue.use(Router);

export default new Router({
    routes:[
        {
            path: '/profile',
            name: '',
            component: '',
            meta:{
                permissions:[
                    {
                        role: "employee",

                    },{

                    }
                ]
            }
        },
        {
            path: '',
            name: '',
            component: '',
        },
        {

        }
    ]
});
