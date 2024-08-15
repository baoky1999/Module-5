let arr = [1,2,3,-4,5,6,7,8,9,10];

//1. Tạo một mảng mới chứa các số lớn hơn 5 từ mảng ban đầu.//

// const newArr = arr.filter((value, index) => value > 5);
// console.log(newArr)

//2. Sử dụng arrow function và reduce để tính tổng các phần tử trong mảng.//

// const sum = arr.reduce((temp,currentValue) => temp + currentValue);
// console.log(sum);

//3. Kiểm tra 1 mảng có chứa số V hay không nếu có trả về V không thì trả về "không tìm thấy"//

// const containsValue = (arr, value) => arr.includes(value) ? value : "không tìm thấy";
// const valueToCheck = 9;
// console.log(containsValue(arr, valueToCheck));

//4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có lớn hơn 0 hay không?.//

// const isCheck = arr => arr.every(element => element > 0);
// console.log(isCheck(arr));

//5. Tìm phần tử đầu tiên trong mảng lớn hơn 3.//

// const isCheck = arr => arr.find(element => element > 3);
// console.log(isCheck(arr));

// 6. Sử dụng destructuring với rest parameter để trích xuất phần tử đầu tiên vào biến "first"
// và các phần tử còn lại vào một mảng mới "rest".

// const [first,...rest] = arr;
// console.log(first);
// console.log(rest);

//7. Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".

// const people = [
//     { name: 'Alice', age: 25 },
//     { name: 'Bob', age: 30 },
//     { name: 'Charlie', age: 35 }
// ];
//
// const [,{ name: firstName, age: firstAge }] = people;
// console.log(firstName);
// console.log(firstAge);

//8. Sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.

// const sum = (...numbers) => numbers.reduce((total, num) => total + num,0);
//
// console.log(sum(1, 2, 3, 4, 5));
// console.log(sum(10, 20));
// console.log(sum());

//9. Sử dụng Rest parameter để nhận vào một danh sách tên và trả về chuỗi định dạng "Welcome, [tên1], [tên2], [tên3], ..."
// cho tất cả các tên.

// const welcomeMessage = (...names) => {
//     const namesList = names.join(', ');
//     return `Welcome, ${namesList}`;
// };
//
// console.log(welcomeMessage('Alice', 'Bob', 'Charlie'));
// console.log(welcomeMessage('John'));

//10. Tạo một đối tượng "book" với thuộc tính "title", "author"
// và "pages" bằng cách sử dụng Enhanced object literals. Đối tượng "book" cũng có phương thức "displayInfo" để in ra thông tin về sách.

const book = {
    title: 'C0324H1',
    author: 'HAI.TT',
    pages: 20,

    displayInfo() {
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Pages: ${this.pages}`);
    }
};
book.displayInfo();


