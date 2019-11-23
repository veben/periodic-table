import { Component } from "@angular/core";
import * as data from "../assets/data.json";
import { ElementModel } from "./element.model";

@Component({
  selector: "periodic-table-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  elements: ElementModel[] = data["default"];
}
