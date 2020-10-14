class GenericMap<T extends number | string> 
{
 	 private items: { [key: string]: T } = { };

  	setItem(key: string, item: T): void 
{
    		this.items[key] = item;
  	}

getItem(key: string): T 
{
    		return this.items[key];
  	}

  	clear(): void 
{
    		this.items = {};
  	}

  	printMap(): string 
{
    		const itemsAsString = Object
      					.getOwnPropertyNames(this.items)
      					.map(key => `'${key}': ${this.getItem(key)}`)
      					.join(", ");
    		return `{ ${itemsAsString} }`;
  	}
}
const numb = new GenericMap < number > ();
numb.setItem('alpha', 7);
numb.setItem('beta', 14);
console.log(numb.printMap());
numb.clear();
console.log(numb.printMap());
const strMap = new GenericMap < string > ();
strMap.setItem('color', 'Blue');
strMap.setItem('height', '54 cm');
console.log(strMap.printMap());
