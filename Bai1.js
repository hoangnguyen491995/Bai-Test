// Bài 1. Hãy viết hàm sắp xếp mãng số bên dưới để ra được số lớn nhất.
// VD: [1, 10, 11] => Số lớn nhất 11110.

// Array 1
let Arr1 = [0, 10, 1, 99, 9, 8, 79, 91, 22, 32, 12];
const NumberMax1 = (arr) => {
    for (let i = 0; i < arr.length- 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const x = parseInt("" + arr[i] + arr[j])
            const y = parseInt("" + arr[j] + arr[i])
            if (x < y) {
                let t = arr[i]
                arr[i] = arr[j]
                arr[j] = t
            }
        }
    }
    let result = arr.join("")
    console.log(' Số lớn nhất trong Array 1 là ',result)
}
NumberMax1(Arr1);

// Array 2
let Arr2 = [99, 19, 29, 39, 11, 21, 32, 33, 35, 50, 60, 90];
const NumberMax2 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length ; j++) {
          const x = parseInt("" + arr[i] + arr[j])
          const y = parseInt("" + arr[j] + arr[i])
          if (x < y) {
              let t = arr[i]
              arr[i] = arr[j]
              arr[j] = t
          }
      }
  }
  let result = arr.join("")
  console.log(' Số lớn nhất trong Array 2 là ', result)
}
NumberMax2(Arr2);

//Array 3
let Arr3 =[1, 10, 19, 11, 13, 16, 19] ;
const NumberMax3 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
      for (let j = i + 1; j < arr.length ; j++) {
          const x = parseInt("" + arr[i] + arr[j])
          const y = parseInt("" + arr[j] + arr[i])
          if (x < y) {
              let t = arr[i]
              arr[i] = arr[j]
              arr[j] = t
          }
      }
  }
  let result = arr.join("")
  console.log(' Số lớn nhất trong Array 3 là ', result)
}

NumberMax3(Arr3);






