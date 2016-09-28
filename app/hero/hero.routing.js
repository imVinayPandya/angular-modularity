"use strict";
var router_1 = require('@angular/router');
var hero_component_1 = require('./hero.component');
var hero_list_component_1 = require('./hero-list.component');
var hero_detail_component_1 = require('./hero-detail.component');
var routes = [
    { path: '',
        component: hero_component_1.HeroComponent,
        children: [
            { path: '', component: hero_list_component_1.HeroListComponent },
            { path: ':id', component: hero_detail_component_1.HeroDetailComponent }
        ]
    }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=hero.routing.js.map