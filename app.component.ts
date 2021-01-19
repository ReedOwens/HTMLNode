import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import { extend } from "@syncfusion/ej2-base";
import { isNullOrUndefined as isNOU } from "@syncfusion/ej2-base";
import { ChartComponent } from "@syncfusion/ej2-angular-charts";
import {
  IAccTextRenderEventArgs,
  IAccLoadedEventArgs,
  AccumulationChartComponent,
  IAccAnimationCompleteEventArgs,
  ILoadedEventArgs
} from "@syncfusion/ej2-angular-charts";
import {
  DiagramComponent,
  DiagramTools,
  NodeModel,
  NodeConstraints
} from "@syncfusion/ej2-angular-diagrams";
import { GridComponent } from "@syncfusion/ej2-angular-grids";
import { expenseData, startDate, endDate } from "./complexShapes.data";
import { Query, DataManager, Predicate } from "@syncfusion/ej2-data";
import { RangeEventArgs } from "@syncfusion/ej2-calendars";
import { DateRangePickerComponent } from "@syncfusion/ej2-angular-calendars";

/**
 * Sample for ComplexShapes
 */

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  @ViewChild("diagram") diagram: DiagramComponent;

  // custom code end
  // define the JSON of data
  public nodes: NodeModel[] = [
    {
      id: "node1_template",
      offsetX: 409,
      offsetY: 400,
      width: 200,
      height: 175,
      shape: { type: "HTML" }
    }
  ];

  public targetElement: HTMLElement;

  public created(): void {}
}
// custom code end
