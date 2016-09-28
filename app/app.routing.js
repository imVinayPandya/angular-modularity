"use strict";
var router_1 = require('@angular/router');
exports.routes = [
    { path: '', redirectTo: 'contact', pathMatch: 'full' },
    { path: 'crisis', loadChildren: 'app/crisis/crisis.module#CrisisModule' },
    { path: 'heroes', loadChildren: 'app/hero/hero.module#HeroModule' }
];
exports.routing = router_1.RouterModule.forRoot(exports.routes);
//# sourceMappingURL=app.routing.js.map