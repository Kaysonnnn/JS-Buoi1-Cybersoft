// --------------------------- Bài 3 ------------------
/**
 ** Đầu vào
 - Nhập giá USD hiện nay
 - Số lượng USD cần quy đổi 
 -
 ** Xử lý
 - Tính tổng tiền nhận dc
 - tong = giaUSD *soLuong
 -
 ** Đầu ra
 * Tiền Việt nhận được
 */

 
let btnTongTien = document.getElementById("btnTongTien")
btnTongTien.onclick = function() {
    let giaUSD = document.getElementById("giaUSD").value
    let soUSD = document.getElementById("soUSD").value

    let tongtien = giaUSD * soUSD
    
    let result_3 = `Số tiền Việt nhận được là: ${tongtien} VNĐ`
    let pInfo_3 = document.getElementById("pInfo_3")
    pInfo_3.innerHTML = result_3
}