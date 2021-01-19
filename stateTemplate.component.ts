import { Component, ViewEncapsulation, ViewChild } from "@angular/core";
import {
  IAccTextRenderEventArgs,
} from "@syncfusion/ej2-angular-charts";
import {
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
  selector: "uxs-state-template",
  templateUrl: "stateTemplate.component.html",
  styleUrls: ["stateTemplate.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class StateTemplateComponent {

}
// custom code end
