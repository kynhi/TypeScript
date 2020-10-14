interface Color  {
	color: string;
}
interface Length extends Color {
	length: number;
}
var shape = <Length>{};
shape.color = 'Blue';
shape.length = 10;
console.log('Color of the shape is ' + shape.color);
console.log('Length of the shape is ' + shape.length);
