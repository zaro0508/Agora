import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../shared';

import { ScatterPlotViewComponent } from './scatter-plot/scatter-plot-view';
import { BoxPlotViewComponent } from './box-plot/box-plot-view';
import { SelectMenuViewComponent } from './select-menu/select-menu-view';
import { RowChartViewComponent } from './row-chart/row-chart-view';
import { ForceChartViewComponent } from './force-chart/force-chart-view';
import { MedianChartViewComponent } from './median-chart/median-chart-view';

import { FormsModule } from '@angular/forms';

import { ChartService } from './services';

import {
    ButtonModule
} from 'primeng/button';

@NgModule({
    declarations: [
        BoxPlotViewComponent,
        ScatterPlotViewComponent,
        SelectMenuViewComponent,
        RowChartViewComponent,
        ForceChartViewComponent,
        MedianChartViewComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        AppSharedModule.forRoot(),
        // PrimeNG modules
        ButtonModule
    ],
    exports: [
        BoxPlotViewComponent,
        ScatterPlotViewComponent,
        SelectMenuViewComponent,
        RowChartViewComponent,
        ForceChartViewComponent,
        MedianChartViewComponent
    ],
    providers: [
        ChartService
    ]
})
// Changed the name so it does not conflict with primeng module
export class ChartsModule {}
