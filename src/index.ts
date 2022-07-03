import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharacterCollection } from './CharacterCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([10, 3, -5, 4, 7, -2]);
numberCollection.sort();
console.log(numberCollection.data);

const charCollection = new CharacterCollection('fsgojierbmDFTRfsfdWRSlg');
console.log(charCollection.data);

const linkedList = new LinkedList();
linkedList.add(4);
linkedList.add(-2);
linkedList.add(14);
linkedList.add(-10);
linkedList.sort();
linkedList.print();