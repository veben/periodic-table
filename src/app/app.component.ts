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

  getCssClassesForElement(element: ElementModel): string {
    const groupToCssClass = {
      "Nonmetal": "nonmetal",
      "Noble Gas": "noble-gas",
      "Alkali Metal": "alkali-metal",
      "Alkaline Earth Metal": "alkaline-earth-metal",
      "Metalloid": "metalloid",
      "Halogen": "halogen",
      "Post-Transition Metal": "post-transition-metal",
      "Transition Metal": "transition-metal",
      "Lanthanide": "lanthanide",
      "Actinide": "actinide"
    };

    return "element an" + element.atomicNumber + ' ' + groupToCssClass[element.group];
  }
}
