// Bài 1: Viết chương trình cho người dùng nhập vào 3 số, viết hàm kiểm tra để tìm ra số bé nhất và in ra số đó




            // function soNhoNhat(a, b, c) {
            //     let min = a;
            //     if (b<min) {
            //         min = b;
            //     }
            //     if (c<min) {
            //         min = c;
            //     }
            //     return min
            // }

            // a = parseFloat(prompt('Nhập số thứ 1:'))
            // b = parseFloat(prompt('Nhập số thứ 2:'))
            // c = parseFloat(prompt('Nhập số thứ 3:'))
            // console.log('Số nhỏ nhất trong 3 số là:', soNhoNhat(a, b, c));




// Bài 2: Viết hàm kiểm tra xem số người dùng nhập vào có phải là số nguyên tố hay không?
// (số nguyên tố là số nguyên dương chỉ có 2 ước là 1 và chính nó).

            


            // function soNT(a) {
            //     let count = 0
            //     for (let i = 1; i <= a; i++) {
            //         if (a%i==0) {
            //             count++;
            //         }
            //     }
            //     if (count == 2) {
            //         console.log(`${a} là số nguyên tố`);
            //     } else {
            //         console.log(`${a} không phải là số nguyên tố`);
            //     }
            // }

            // a = +(prompt('Nhập 1 số nguyên dương:'));
            // soNT(a);



// Bài 3: Viết hàm tính giai thừa của một số nguyên bất kỳ được đưa vào. Thực thi hàm vừa khởi tạo


            // function giaiThua(a) {
            //     let tich = 1;
            //     while (a<0) {
            //         a = +(prompt('Nhập lại 1 số nguyên dương:'));
            //     }
            //     if (a==0 || a==1) {
            //         tich = 1;
            //     } else {
            //         for (let i = 2; i <= a; i++) {
            //             tich *=i;
            //         }
            //     }         
            //     return tich
            // }
            
            // a = +(prompt('Nhập 1 số nguyên dương:'));
            // console.log(`${a}! =`, giaiThua(a));



// Bài 4: Cho mảng sau:
// let arr=[1,2,3,4,5,6,7,8,9,10]
// Viết hàm trả về tất cả các cặp số có tổng bằng 10



            // function tong10(arr) {
            //     let arr1 = [];
            //     for (let i = 0; i < arr.length; i++) {
            //         for (let j = i+1; j < arr.length; j++) {
            //             if (arr[i] + arr[j] == 10) {
            //                 arr1.push([arr[i], arr[j]])
            //             }
            //         }
            //     }
            //     console.log('Các cặp số có tổng = 10 là:', arr1);
            // }
            
            // let arr=[1,2,3,4,5,6,7,8,9,10];
            // tong10(arr);



// Bài 5: Cho người dùng nhập vào chuỗi kí tự. Viết hàm kiểm tra xem tần suất xuất hiện của mỗi ký tự và in ra chúng

            


            // function ktSoLanXuatHien(arr) {
            //     let arr1 = arr.split('');
            //     let count = 1;
            //     for (let i = 0; i < arr1.length-1; i++) {
            //         count = 1;
            //         for (let j = i+1; j < arr1.length; j++) {
            //             if (arr1[i] === arr1[j]) {
            //                 count++;
            //                 arr1.splice(j, 1);
            //                 j--;
            //             }
            //         }
            //         console.log(`Ký tự ${arr1[i]} xuất hiện ${count} lần`);
            //     }
            // }

            // let text = prompt("Nhập vào 1 chuỗi:");
            // ktSoLanXuatHien(text);



