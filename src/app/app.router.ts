import { Routes } from "@angular/router";

import { ListComponent } from "./list/list.component";
import { DetailComponent } from "./detail/detail.component";
import { EditComponent } from "./edit/edit.component";
import { CollectionComponent } from "./collection/collection.component";

export const rootRouterConfig: Routes = [
{
	path:"",
	redirectTo: "list",
	pathMatch: "full"
},{
	path: "list",
	component: ListComponent
},{
	path: "detail/:id",
	component: DetailComponent
},{
	path: "edit",
	component: EditComponent
},{
	path: "edit/:id",
	component: EditComponent
},{
	path: "collection",
	component: CollectionComponent
}]