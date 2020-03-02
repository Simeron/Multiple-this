import React, { useEffect, useState, Fragment } from 'react';
import './NumberGridStyles.css';

const colors = {
    Sea: '#a2ccb6',
    Sand: '#fceeb5',
}

export const Apped = () => {
    const [color, setColor] = useState(colors.Sea)
    useEffect(
        () => {
            document.body.style.background = color
        },
        [color]
    )
    return (
        <Fragment>
            <select value={color} onChange={e => setColor(e.target.value)}>
                {Object.entries(colors).map(([name, value]) => (
                    <option key={`color--${name}`} value={value}>
                        {name}
                    </option>
                ))}
            </select>
        </Fragment>
    )
}


// function showMultiples() {
//         var extra = document.getElementsByClassName("extrabox")[0];
//         extra.style.backgroundColor = '#9400D3';
//     }

// to get a list of all the numbers
let numbersStart = 1;
let numbersEnd = 144;
let allNumbers = Array(numbersEnd - numbersStart + 1)
    .fill()
    .map(() => numbersStart++);
console.log(allNumbers);

export function CurrentNumber() {
    const [holdNumber, showTheMultiples] = useState(0);
    return (
        <div>
            <p>you have clicked on the number {holdNumber}</p>
            <button onClick={() => showTheMultiples(holdNumber + 1)}>3</button>
        </div>
    )
}

// func to find the multiples
function multiplesOf(numbers, number) { // add second argument
    var multiples = [allNumbers]; // change to array (so that we can store multiple numbers - not just one multiple)
    console.log(multiples);
    //var multipleof = document.getElementByClassName("box")[0].value
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] % number === 0) { // divide by the number
            multiples.push(numbers[i]); // add the current multiple found to the multiples array
        }
    }

    return multiples;
}
console.log(multiplesOf(allNumbers, 4)); // Output: [4, 6, 8]

// code to get the current value of what the user has clicked on 
const handleClick = currentValue => () => console.log(currentValue);


// func to back the background color
// document.getElementsByClassName("box")[0].addEventListener("click", function(){

//   var extra = document.getElementsByClassName("extrabox")[0];
//   extra.style.backgroundColor = '#9400D3';
//   });

// WORKING TO DISPLAY ALL NUMBERS!!!!!!!!!
//   code to map stuff in react
export const MapThis = () =>
    <div>
        <div className="wrapper">
        {allNumbers.map(allNumbers => (
            <div className="box" key={allNumbers.toString()} onClick={handleClick(allNumbers)}>
                {allNumbers}
            </div>
        ))}
        </div>
    </div>
export default MapThis;

// try and use usestate/ useeffect to try and get the current value and then try and sort the loop thing out I'm thinking something like this onChange={e => setColor(e.target.value)}

// https://stackoverflow.com/questions/12491101/javascript-create-array-from-for-loop - looping nos
// https://codepen.io/jh3y/pen/NeLrxr - changing background colour
// https://stackoverflow.com/questions/54193060/javascript-function-for-finding-multiples-of-a-number - finding the multiples 
// https://ozmoroz.com/2018/07/pass-value-to-onclick-react/ - get onlick value 
// https://linguinecode.com/post/how-to-pass-parameter-values-to-onclick-react-function - to get the current value (number that the user has clicked on)