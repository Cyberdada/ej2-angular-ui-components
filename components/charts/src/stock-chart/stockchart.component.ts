import { Component, ElementRef, ViewContainerRef, ChangeDetectionStrategy, Renderer2, Injector, ValueProvider, ContentChild } from '@angular/core';
import { ComponentBase, IComponentBase, applyMixins, ComponentMixins, PropertyCollectionInfo, setValue } from '@syncfusion/ej2-angular-base';
import { StockChart } from '@syncfusion/ej2-charts';
import { Template } from '@syncfusion/ej2-angular-base';
import { StockChartSeriesCollectionDirective } from './series.directive';
import { StockChartAxesDirective } from './axes.directive';
import { StockChartRowsDirective } from './rows.directive';
import { StockChartAnnotationsDirective } from './annotations.directive';
import { StockChartSelectedDataIndexesDirective } from './selecteddataindexes.directive';
import { StockChartPeriodsDirective } from './periods.directive';
import { StockChartIndicatorsDirective } from './indicators.directive';

export const inputs: string[] = ['annotations','axes','background','border','chartArea','crosshair','dataSource','enableCustomRange','enablePeriodSelector','enablePersistence','enableRtl','enableSelector','exportType','height','indicatorType','indicators','isMultiSelect','isSelect','isTransposed','locale','margin','periods','primaryXAxis','primaryYAxis','rows','selectedDataIndexes','selectionMode','series','seriesType','theme','title','titleStyle','tooltip','trendlineType','width','zoomSettings'];
export const outputs: string[] = ['axisLabelRender','load','loaded','rangeChange','selectorRender','seriesRender','tooltipRender'];
export const twoWays: string[] = [''];

/**
 * Stock Chart Component
 * ```html
 * <ejs-stockchart></ejs-stockchart>
 * ```
 */
@Component({
    selector: 'ejs-stockchart',
    inputs: inputs,
    outputs: outputs,
    template: '',
    changeDetection: ChangeDetectionStrategy.OnPush,
    queries: {
        childSeries: new ContentChild(StockChartSeriesCollectionDirective), 
        childAxes: new ContentChild(StockChartAxesDirective), 
        childRows: new ContentChild(StockChartRowsDirective), 
        childAnnotations: new ContentChild(StockChartAnnotationsDirective), 
        childSelectedDataIndexes: new ContentChild(StockChartSelectedDataIndexesDirective), 
        childPeriods: new ContentChild(StockChartPeriodsDirective), 
        childIndicators: new ContentChild(StockChartIndicatorsDirective)
    }
})
@ComponentMixins([ComponentBase])
export class StockChartComponent extends StockChart implements IComponentBase {
    public childSeries: any;
    public childAxes: any;
    public childRows: any;
    public childAnnotations: any;
    public childSelectedDataIndexes: any;
    public childPeriods: any;
    public childIndicators: any;
    public tags: string[] = ['series', 'axes', 'rows', 'annotations', 'selectedDataIndexes', 'periods', 'indicators'];

    @ContentChild('tooltipTemplate')
    @Template()
    public tooltip_template: any;

    constructor(private ngEle: ElementRef, private srenderer: Renderer2, private viewContainerRef:ViewContainerRef, private injector: Injector) {
        super();
        this.element = this.ngEle.nativeElement;
        this.injectedModules = this.injectedModules || [];
        try{ this.injectedModules.push(this.injector.get('ChartsLineSeries')); }catch {} 



























        this.registerEvents(outputs);
        this.addTwoWay.call(this, twoWays);
        setValue('currentInstance', this, this.viewContainerRef);
    }

    public ngOnInit() {
    }

    public ngAfterViewInit(): void {
    }

    public ngOnDestroy(): void {
    }

    public ngAfterContentChecked(): void {
    }

    public registerEvents: (eventList: string[]) => void;
    public addTwoWay: (propList: string[]) => void;
}
