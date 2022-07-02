import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';

const numberCollection = new NumberCollection([10, 3, -5, 4, 7, -2]);
const numberSorter = new Sorter(numberCollection);
numberSorter.sort();
console.log(numberCollection.data);

const charCollection = new CharacterCollection('fsgojierbmDFTRfsfdWRSlg');
const charSorter = new Sorter(charCollection);
charSorter.sort();
console.log(charCollection.data);