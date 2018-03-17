import { Component,OnChanges,Input,Output,EventEmitter } from "@angular/core";

@Component({
    selector : "star",
    templateUrl :"./../template/star-view.html"
})
export class StarComponents implements OnChanges {
@Input() rating:number;
startWidth: number = 86;
@Output() userNotify : EventEmitter<string> = new EventEmitter<string>();
ngOnChanges() : void {
    this.startWidth = this.rating * 86/5;
    console.log("Width : " +this.startWidth);
}
starClick() : void {
    console.log(this.rating);
    this.userNotify.emit("You gave "+this.rating+" rating");
}
}