// --------------------------- Bài 1 ------------------
/**
 ** Đầu vào
 - lương 1 ngày = 100,000
 - prompt cho người dùng nhập số ngày
 -
 ** Xử lý
 - Lương nhân viên = lương * số ngày làm việc
 -
 -
 ** Đầu ra
 * Lương nhân viên 
 */

let btnLuong = document.getElementById("btnLuong")
btnLuong.onclick = function() {
    let luong = document.getElementById("luong").value
    let soNgay = document.getElementById("ngay").value

    let luongNhanVien = luong * soNgay

    let result_1 = `Lương của nhân viên trong ${soNgay} ngày là: ${luongNhanVien}`
    let pInfo_1 = document.getElementById("pInfo_1")
    pInfo_1.innerHTML = result_1
}


