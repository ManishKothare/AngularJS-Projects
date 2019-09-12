import { Component, OnInit } from "@angular/core";
import { MOBILES } from "./mobile";
import { Mobiles } from "./mobile-datatype";
@Component({
  selector: "app-mobile-parts",
  templateUrl: "./mobile-parts.component.html",
  styleUrls: ["./mobile-parts.component.css"]
})
export class MobilePartsComponent implements OnInit {
  constructor() {
    console.log("Mobiles Constructor...!");
  }

  ngOnInit() {
    this.mobiles = MOBILES;
    console.log("%c Mobiles ngOnInit...!", "color:blue");
  }

  mobiles: Mobiles[];
  quantity = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  myClickFunction1(event) {
    let text = document.getElementById("demo1").textContent;
    alert("Button is clicked : " + text);
  }
  myClickFunction2(event) {
    let text = document.getElementById("demo2").textContent;
    alert("Button is clicked : " + text);
  }
  changeQuantity(event) {
    let qty = document.getElementById("qtySelect").nodeValue;
    alert("Changed quantity from the dropdown: " + qty);
  }
}
