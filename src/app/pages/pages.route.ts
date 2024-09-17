import { Route } from "@angular/router";
import { UsersGridComponent } from "./user/users-grid/users-grid.component";
import { AccountComponent } from "./extrapages/account/account.component";
import { AccountSettingsComponent } from "./extrapages/account-settings/account-settings.component";
import { PricingComponent } from "./extrapages/pricing/pricing.component";
import { ContactUsComponent } from "./extrapages/contact-us/contact-us.component";
import { FaqsComponent } from "./extrapages/faqs/faqs.component";
import { UserComponent } from "./user/user.component";




export const PAGE_ROUTES: Route[] = [
    {path:'',redirectTo:'apps-users-list',pathMatch:'full'},
    { path: 'apps-users-list', component: UserComponent },
    { path: 'apps-users-grid', component: UsersGridComponent },
    // extrapages
    { path: 'pages-account', component: AccountComponent },
    { path: 'pages-account-settings', component: AccountSettingsComponent },
    { path: 'pages-pricing', component: PricingComponent },
    { path: 'pages-contact-us', component: ContactUsComponent },
    { path: 'pages-faqs', component: FaqsComponent },




];