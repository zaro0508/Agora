import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe } from '@angular/common';

import { GenesModule } from '../genes';
import { ChartsModule } from '../charts';

import { CoreRoutingModule } from './core-routing.module';

// PrimeNG modules
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { MenubarModule } from 'primeng/menubar';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { PanelMenuModule } from 'primeng/panelmenu';
import { TieredMenuModule } from 'primeng/tieredmenu';

import {
    TableModule
} from 'primeng/table';

// Backend modules and extra config
import { environment } from 'environments/environment';
import { AngularFireModule } from 'angularfire2';

// export const firebaseConfig = ENV_FIREBASE_CONFIG;

import {
    AuthGuardService,
    AuthenticationService,
    BreadcrumbService,
    ColorService,
    GeneService,
    DataService
} from './services';

import { AboutComponent } from './about';
import { BreadcrumbComponent } from './breadcrumb';
import { NavbarComponent } from './navbar';
import { MenubarComponent } from './menubar';
import { FooterComponent } from './footer';
import { NoContentComponent } from './no-content';

import '../../styles/styles.scss';
import '../../styles/headings.css';

@NgModule({
    imports: [
        CommonModule,
        CoreRoutingModule,
        // PrimeNG modules
        SplitButtonModule,
        MenuModule,
        MenubarModule,
        TieredMenuModule,
        PanelMenuModule,
        BreadcrumbModule,
        // Other third-party modules
        // AngularFireModule.initializeApp(firebaseConfig),
        // Feature Modules
        GenesModule,
        ChartsModule
    ],
    declarations: [
        AboutComponent,
        BreadcrumbComponent,
        NavbarComponent,
        MenubarComponent,
        FooterComponent,
        NoContentComponent
    ],
    exports: [
        // Exported components
        BreadcrumbComponent,
        NavbarComponent,
        MenubarComponent,
        FooterComponent
    ],
    providers: [
        AuthenticationService,
        AuthGuardService,
        BreadcrumbService,
        DataService,
        GeneService,
        ColorService,
        DecimalPipe
    ]
})
export class CoreModule { }