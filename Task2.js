let Temp;
let Units;

//variables to changes
Temp = 0
Units = 'Celsius' // Just Celsius or Fahrenheit

switch (Units) {
    case 'Celsius':
        ConvTemp=1.8*Temp +32;
        console.log(`${Temp} °${Units} is equal to ${ConvTemp.toFixed(2)} °Fahrenheit`);
        break;
    case 'Fahrenheit':
        ConvTemp=(Temp-32)/1.8;
        console.log(`${Temp} °${Units} is equal to ${ConvTemp.toFixed(2)} °Celsius`);
        break;
    default:
        console.log('Invalid units');
}

let Dist;
let Dunits;

//variables to changes
Dist = 10
Dunits = 'miles' // Just Km or miles

switch (Dunits) {
    case 'Km':
        ConvDist=Dist/1.6093;
        console.log(`${Dist} ${Dunits} is equal to ${ConvDist.toFixed(2)} miles`);
        break;
    case 'miles':
        ConvDist=Dist*1.6093;
        console.log(`${Dist} ${Dunits} is equal to ${ConvDist.toFixed(2)} Km`);
        break;
    default:
        console.log('Invalid units');
}

