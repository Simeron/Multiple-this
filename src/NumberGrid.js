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
            <div>
                <div className="wrapper">
                    <div className="box a" value={color} onChange={e => setColor(e.target.value)}>1</div>
                    {Object.entries(colors.Sand).map(([name, value]) => (
                        <button value={value}>
                            {name}
                        </button>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}


// function showMultiples() {
//         var extra = document.getElementsByClassName("extrabox")[0];
//         extra.style.backgroundColor = '#9400D3';
//     }
// grid of nos
// export const NumberGrid = () => 
//         <div>
//             <div className="wrapper">
//                 <div className="box a">1</div>
//                 <div className="box b">2</div>
//                 <div className="box c">3</div>
//                 <div className="box d">4</div>
//                 <div className="box e">5</div>
//                 <div className="box f">6</div>
//                 <div className="extra">7</div>
//             </div>
//         </div>


// export default NumberGrid;

// to get a list of all the numbers
let numbersStart = 1;
let numbersEnd = 144;
let allNumbers = Array(numbersEnd - numbersStart + 1)
    .fill()
    .map(() => numbersStart++);
console.log(allNumbers);

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
            <div className="box">
                {allNumbers}
            </div>
        ))}
        </div>
    </div>
export default MapThis;

// Me trying to create a function another way
// onclick {
//     // here goes code to get user selection
//     if (no is a multiple of selected no) {
//         then  change colour code
//     } else {
//         stay the same 
//     }
// }

// https://stackoverflow.com/questions/12491101/javascript-create-array-from-for-loop - looping nos
// https://codepen.io/jh3y/pen/NeLrxr - changing background colour
// https://stackoverflow.com/questions/54193060/javascript-function-for-finding-multiples-of-a-number - finding the multiples 
// https://ozmoroz.com/2018/07/pass-value-to-onclick-react/ - get onlick value 