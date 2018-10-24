import { NgModule } from '@angular/core';

import { AppSharedModule } from '../shared';

import { BPDialogComponent } from './bp-dialog';
import { BRDialogComponent } from './br-dialog';
import { DRUggabilityComponent } from './dg-dialog';
import { MEDialogComponent } from './me-dialog';
import { SOEDialogComponent } from './soe-dialog';
import { SGDialogComponent } from './sg-dialog';
import { MoreInfoComponent } from './more-info';
import { NOMinatedTargetComponent } from './nt-dialog';
import { RNAComponent } from './rna-dialog';

import { DialogsService } from './services';

@NgModule({
    imports: [
        // Shared and route modules
        AppSharedModule
    ],
    declarations: [
        MoreInfoComponent,
        BPDialogComponent,
        BRDialogComponent,
        MEDialogComponent,
        SGDialogComponent,
        SOEDialogComponent,
        DRUggabilityComponent,
        NOMinatedTargetComponent,
        RNAComponent
    ],
    exports: [
        MoreInfoComponent,
        BPDialogComponent,
        BRDialogComponent,
        MEDialogComponent,
        SGDialogComponent,
        SOEDialogComponent,
        DRUggabilityComponent,
        NOMinatedTargetComponent,
        RNAComponent
    ],
    providers: [
        DialogsService
    ]
})
// Changed the name so it does not conflict with primeng module
export class DialogsModule {}