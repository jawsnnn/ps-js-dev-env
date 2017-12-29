import './index.css';
import numeral from 'numeral';
var price = numeral(1000).format('$0,00.00');
debugger;
console.log(`This is a fine day for earning ${price}`);
