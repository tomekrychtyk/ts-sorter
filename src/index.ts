import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';

const numberCollection = new NumberCollection([10, 3, -5, 4, 7, -2]);
const sorter = new Sorter(numberCollection);

sorter.sort();

console.log(numberCollection.data);