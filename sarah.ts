class SortUtil {
  collection: number[] | string | LinkedList;

  constructor(collection: number[] | string | LinkedList) {
    this.collection = collection;
  }

  sort(): void {
    const { length } = this.collection;
    let isSorted = false;
    let lastUnsorted = length - 1;
    while (!isSorted) {
      isSorted = true;
      for (let i = 0; i < lastUnsorted; i++) {
        // HANDLE LINKED LIST LOGIC HERE 
        if (this.collection instanceof LinkedList) {
          // HELP! -Sarah
        }

        // HANDLE LIST OF NUMBERS LOGIC HERE
        // I GOT IT TO WORK WITH ARRAY OF NUMBERS
        if (this.collection instanceof Array) {
          if (this.collection[i] > this.collection[i + 1]) {
            let tempLeft = collection[i];
            this.collection[i] = this.collection[i+1];
            this.collection[i+1] = tempLeft;
            isSorted = false;
          }
        }

        // HANDLE STRING LOGIC HERE
        if (typeof this.collection === "string") {
          // HELP! -Sarah
        }
      }
      lastUnsorted--;
    }
  }
}

const sortUtil = new SorterUtil([10, 3, -5, 0]);
sortUtil.sort();
console.log(sorter.collection);