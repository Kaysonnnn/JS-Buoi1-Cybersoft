
// --------------------------- Bài 5 ------------------
/**
 ** Đầu vào
 - Nhập 1 số có 2 chữ số
 -
 ** Xử lý
 - Tính tổng 2 ký số vừa nhập
 - Lấy hàng đơn vị : soHangDV = so % 10
 - Lấy hàng đơn chục : soHangChuc = so / 10
 ** Đầu ra
 * Tổng 2 ký số
 */

// let so = prompt("nhập 1 số có 2 chữ số: ")
// let soHangDV = so % 10
// let soHangChuc = Math.floor (so / 10) 
// let tong2So = soHangChuc + soHangDV 
// console.log(tong2So);

let btnKySo = document.getElementById("btnKySo")
btnKySo.onclick = function() {
    let kySo = document.getElementById("kySo").value
    let soHangDV = kySo % 10
    let soHangChuc = Math.floor (kySo / 10) 
    
    let tong2So = soHangChuc + soHangDV 

    let result_5 = `Tổng 2 ký số là: ${tong2So}`
    let pInfo_5 = document.getElementById("pInfo_5")
    pInfo_5.innerHTML = result_5
}

 