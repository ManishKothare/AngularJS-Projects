import { Books } from "./books-datatype";
import { BOOKS } from "./books";
import { Component, OnInit } from "@angular/core";
@Component({
  selector: "app-education",
  templateUrl: "./education.component.html",
  styleUrls: ["./education.component.css"]
})
export class EducationComponent implements OnInit {
  constructor() {
    console.log("Books constructor...!");
  }

  ngOnInit() {
    console.log("%c Books ngOnInit...!", "color:yellow");
    this.books = BOOKS;
  }

  books: Books[];
  quantity = [1, 2, 3, 4, 5];
}
