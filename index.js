// bài 1
//nhập vào: ko cần
// xuất ra: số nhỏ nhất để kết quả lớn hơn 10000
// các bước:

//tạo hàm chứa các lệnh thực hiện bài toàn
function findNumber() {
    // tạo biến chứa kết quả
    let result = 0;
    // tạo biến chứa index
    let i = 0;
    // sử dụng hàm do...while để thực hiện
    do{
        //bước nhảy
        i++
        //phép toán khi thỏa điều kiện
        result+=i;
    }
    //điều kiện
    while(result<=10000)
    // in ra màn hình kết quả 
    document.getElementById('number').innerHTML = `số nguyên dương nhỏ nhất: ${i}`;
}
// gọi hàm 
findNumber();

// bài 2
//nhập vào: n,x
// xuất ra kết quả thực hiện phép tính 
    // DOM vào form và tạo hàm chứa các hành động khi có sự kiện submit
document.getElementById('calcPow').onsubmit = function(evt){
    // ngăn chặn load lại trang khi submit
    evt.preventDefault();
    //DOM và lấy giá trị của các ô input
    let n = +evt.target.elements.n.value;
    let x = +evt.target.elements.x.value;
    // tạo biến cho kết quả và gán bằng 0
    let result = 0;
    // sử dụng vòng lặp for để thực hiện bài toán  
    for(let i = 1;i<=n;i++){
        // phép toán được thực hiện khi thoa điều kiện
        result += Math.pow(x,i);
    };
    //in ra màn hình kết quả 
    document.getElementById('ketQua').innerHTML = `kết quả: ${result} `

}

// bài 3
//nhập vào: số cần tính gia thừa
//xuất ra : kết quả sau khi thực hiện 
document.getElementById('calcGiaithua').onsubmit = function(evt){
    //ngăn chặn hành động load lại trang
    evt.preventDefault();
    //tạo biến chứa kết quả
    let result = 1;
    // DOM vào a chứa giá tri nhâp vào
    const a = +evt.target.elements.a.value;
    // if(!a){
    //     result = 1;
    // } 

    //sử dụng vòng lặp for để thực hiện phép toán
    for(let i = 1; i<=a; i++){
        // phép toán được thực hiện khi thỏa điều kiện
        result *= i 
    }
    // in kết quả ra màn hình 
    document.getElementById('ketQua3').innerHTML = `kết quả: ${result}`

}

// bài 4

//nhập vào: không 
// xuất ra : thẻ div chứa màu sắc và nội dung phù hợp với đề bài
//DOM vào button thực hiện bài toán và viết các hành động khi có sự kiện click
    document.getElementById('createDiv').onclick = function(){
        // DOM vào container chứa các thẻ div 
        const fatherDiv = document.getElementById('fatherBox');
        //sử dụng vòng lặp for và điều kiện if để thực hiện phép toán theo yêu cầu 
        for( let i = 1; i<=10;i++){
            // khi index chia hết cho 2 chứng tỏ thẻ div ở vị trí chăn và có bg màu đỏ
            if(!Math.floor(i%2)){
                fatherDiv.innerHTML += ` <div id="number" class="w-100 border border-primary pl-2 py-2 bg-primary rounded text-light">div ${i} </div>`
            }
            // khi index ko chia hết cho 2 chứng tỏ thẻ div ở vị trí lẻ và có bg màu xanh
            else{
                fatherDiv.innerHTML += ` <div id="number" class="w-100 border border-primary pl-2 py-2 bg-danger rounded text-light">div ${i} </div>` 
            }
        }
    }

