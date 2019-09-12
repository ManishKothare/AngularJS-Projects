import { Cloths } from "./cloths-datatype";
import { CLOTHS } from "./cloths";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-clothing",
  templateUrl: "./clothing.component.html",
  styleUrls: ["./clothing.component.css"]
})
export class ClothingComponent implements OnInit {
  constructor() {
    console.log("Cloths Constructor...!");
  }

  ngOnInit() {
    this.cloths = CLOTHS;
    console.log("%c Cloths ngOnInit...!", "color:brown");
  }
  cloths: Cloths[];
  //let sizes: Array<string>;
  sizes = ["S", "M", "L", "XL", "XXL"];
  colors = ["Red", "Blue", "Black", "White"];
}
