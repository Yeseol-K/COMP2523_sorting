import { ISortable } from "./ISortable";
import { NumberGroup } from "./NumberGroup";

export class CharacterGroup implements ISortable {
  data: string;

  constructor(data: string) {
    this.data = data;
  }

  get length(): number {
    return this.data.length;
  }

  swap(leftPos: number, rightPos: number): void {
    let dataArr = this.data.split(''); 
    const temp = dataArr[leftPos];
    dataArr[leftPos] = dataArr[rightPos];
    dataArr[rightPos] = temp;
    this.data = dataArr.join(''); // joins it back
  }

  compare(leftPos: number, rightPos: number): boolean {
  
    return this.data[leftPos].toLowerCase() > this.data[rightPos].toLowerCase();
  }
} 