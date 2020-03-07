import React, { useEffect, useState } from 'react';
import './NumberGridStyles.css';

// Get all the numbers from 1 - 144
let numbersStart = 1;
let numbersEnd = 144;
let allNumbers = Array(numbersEnd - numbersStart + 1)
    .fill()
    .map(() => numbersStart++);

export const MultipleList = () => {
    const numbersEnd = 144;
    const allNumbers = [...Array(numbersEnd).keys()].map(x => ++x);

    function multipleFinder(multipleno) {
        var multiples = [allNumbers];
        for (var i = 0; i < allNumbers.length; i++) {
          if (allNumbers[i] % multipleno === 0) {
            multiples.push(allNumbers[i]);
          }
        }
        return multiples;
    }

    const [multipleList, setMultipleList] = useState([]);

    useEffect(multipleList => {
        console.log(`render! ${multipleList}`);
      });
    
      function handleOnClick(event, number) {
        event.preventDefault();
        setMultipleList(multipleFinder(number));
      }

      function handleStyle(number) {
        return multipleList.includes(number) ? "multiple" : "box";
      }

      function renderMultipleList() {
        return allNumbers.map(number => (
          <div
            className={handleStyle(number)}
            key={number.toString()}
            onClick={e => handleOnClick(e, number)}
          >
            {number}
          </div>
        ));
      }
    
      return (
        <div>
          <div className="wrapper">{renderMultipleList()}</div>
          <div />
        </div>
      );
    };
    
    export default MultipleList;

    // Get all the numbers from 1 - 144
// let numbersStart = 1;
// let numbersEnd = 144;
// let allNumbers = Array(numbersEnd - numbersStart + 1)
//     .fill()
//     .map(() => numbersStart++);

// function MultipleFinder(allthenumbers, multipleno) {
//     var multiples = [allNumbers];
//     for (var i = 0; i < allthenumbers.length; i++) {
//         if (allthenumbers[i] % multipleno === 0) {
//             multiples.push(allthenumbers[i]);
//         }
//     }
//     return multiples;
// }
// // return MultipleFinder();
// console.log(MultipleFinder(allNumbers, 20));

//     // Map all 1 - 144 numbers to the grid
//     export const MapThis = () => {

//         function showTheMultiples(number) {
//             // console.log(allNumbers);
//             MultipleFinder(allNumbers, number);
//             console.log(MultipleFinder(allNumbers, number))

//         }

//         return (
//             <div>
//                 <div className="wrapper">
//                     {allNumbers.map(number => (
//                         <div className="box" key={allNumbers.toString()} onClick={() => showTheMultiples(number)}>
//                             {number}
//                         </div>
//                     ))}
//                 </div>
//                 <div>
//                 </div>
//             </div>
//         )
//     }




