//*********************************************** Switch**************************************************************//
// to check multiple conditions

// switch (key) { // Syntax of Switch
//   case value:
    
//     break;

//   default:
//     break;
// }

const month = 3 // 'mar'

switch (month) {
  case 1: // write 'jan' in place of 1, we can write string value also
    console.log('January');
    break;
  case 2:
    console.log('Feburary');
    break;
  case 3:
    console.log('March');
    break;
  case 4:
    console.log('April');
    break;

  default:
    console.log('default case match');
    break;
}
// if there is no break in switch then if the case match the remaining code which is not get checked also get executed except the default one