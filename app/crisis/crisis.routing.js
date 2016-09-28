"use strict";
var router_1 = require('@angular/router');
var crisis_list_component_1 = require('./crisis-list.component');
var crisis_detail_component_1 = require('./crisis-detail.component');
var routes = [
    { path: '', redirectTo: 'list', pathMatch: 'full' },
    { path: 'list', component: crisis_list_component_1.CrisisListComponent },
    { path: ':id', component: crisis_detail_component_1.CrisisDetailComponent }
];
exports.routing = router_1.RouterModule.forChild(routes);
//# sourceMappingURL=crisis.routing.js.map