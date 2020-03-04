import React, { useEffect, useState, Fragment } from 'react';
import './NumberGridStyles.css';

// to get a list of all the numbers
let numbersStart = 1;
let numbersEnd = 144;
let allNumbers = Array(numbersEnd - numbersStart + 1)
    .fill()
    .map(() => numbersStart++);

function MultipleFinder(allthenumbers, multipleno) {
    var multiples = [allNumbers];
    for (var i = 0; i < allthenumbers.length; i++) {
        if (allthenumbers[i] % multipleno === 0) { // divide by the number
            multiples.push(allthenumbers[i]); // add the current multiple found to the multiples array
        }
    }
    return multiples;
}
// return MultipleFinder();
console.log(MultipleFinder(allNumbers, 20)); // Output: [4, 6, 8]


// WORKING TO DISPLAY ALL NUMBERS!!!!!!!!!
//   code to map stuff in react
export const MapThis = () => {
    function showTheMultiples(allNumbers) {
        console.log(allNumbers);
        MultipleFinder(allNumbers, 6);
        console.log(MultipleFinder(allNumbers, 10))
    }


    return (
        <div>
            <div className="wrapper">
                {allNumbers.map(allNumbers => (
                    <div className="box" key={allNumbers.toString()} onClick={() => showTheMultiples(allNumbers)}>
                        {allNumbers}
                    </div>
                ))}
            </div>
            <div>
            </div>
        </div>
    )
}

export default MapThis;
// export default FunctionComponentWithRef;

// try and use usestate/ useeffect to try and get the current value and then try and sort the loop thing out I'm thinking something like this onChange={e => setColor(e.target.value)}

// https://stackoverflow.com/questions/12491101/javascript-create-array-from-for-loop - looping nos
// https://codepen.io/jh3y/pen/NeLrxr - changing background colour
// https://stackoverflow.com/questions/54193060/javascript-function-for-finding-multiples-of-a-number - finding the multiples 
// https://ozmoroz.com/2018/07/pass-value-to-onclick-react/ - get onlick value 
// https://linguinecode.com/post/how-to-pass-parameter-values-to-onclick-react-function - to get the current value (number that the user has clicked on)
// https://upmostly.com/tutorials/react-onclick-event-handling-with-examples - handling click events with mapping and stuff to get the value
// http://learningprogramming.net/modern-web/react-functional-components/use-onclick-event-in-react-functional-components/ - get e.target.value