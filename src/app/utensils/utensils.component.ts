import { Utensils } from "./utensil-datatype";
import { Component, OnInit } from "@angular/core";
import { UTENSILS } from "./utensil";

@Component({
  selector: "app-utensils",
  templateUrl: "./utensils.component.html",
  styleUrls: ["./utensils.component.css"]
})
export class UtensilsComponent implements OnInit {
  constructor() {
    console.log("Utensils constructor...!");
  }

  ngOnInit() {
    this.utensils = UTENSILS;
    console.log("%c Utensils ngOnInit...!", "color:pink");
  }

  utensils: Utensils[];
  quantity = [1, 2, 3, 4, 5];
  material = ["Steel", "Copper", "Wooden", "Glass"];
}
