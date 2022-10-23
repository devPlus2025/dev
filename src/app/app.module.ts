import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ToolbarModule } from 'primeng/toolbar';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { PanelModule } from 'primeng/panel';
import { CheckboxModule } from 'primeng/checkbox';
import { DropdownModule } from 'primeng/dropdown';
import { DividerModule } from 'primeng/divider';
import { MenuModule } from 'primeng/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './shared/components/dashboard/dashboard.component';
import { DataService } from '../app/api/data.services';
import { appReducer } from './store/app.state';
import { userModule } from './user/user.module';
import { UserAuthEffects } from './user/state/user-auth/user-auth.effects';
import { UserAccountComponent } from './user-orders/user-account/user-account.component';
import { UserOrdersFormComponent } from './user-orders/user-orders-form/user-orders-form.component';
import { MenuItemEffect } from './user-orders/state/menuItem.effects';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        DashboardComponent,
        UserAccountComponent,
        UserOrdersFormComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatSidenavModule,
        MatToolbarModule,
        MatMenuModule,
        MatIconModule,
        MatDividerModule,
        MatListModule,
        MatInputModule,
        MatCardModule,
        ReactiveFormsModule,
        TabViewModule,
        FormsModule,
        ToolbarModule,
        HttpClientInMemoryWebApiModule.forRoot(DataService),
        HttpClientModule,
        EffectsModule.forRoot([UserAuthEffects, MenuItemEffect]),
        StoreModule.forRoot(appReducer),
        StoreDevtoolsModule.instrument({
            logOnly: false,
        }),
        userModule,
        MenubarModule,
        InputTextModule,
        ButtonModule,
        PanelModule,
        CheckboxModule,
        DropdownModule,
        DividerModule,
        MenuModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
