// --------------------------- Bài 4 ------------------
/**
 ** Đầu vào
 - Nhập chiều dài
 - Nhập chiều rộng
 -
 ** Xử lý
 - Tính diện tích, chu vi
 - Diện tích = dài * rộng
 - Chu vi = (dài + rộng) * 2
 ** Đầu ra
 * Diện tích, chu vi của HCN
 */

let btnDienTich = document.getElementById("btnDienTich")
btnDienTich.onclick = function() {
    let chieuDai = document.getElementById("chieuDai").value
    let chieuRong = document.getElementById("chieuRong").value

    let dienTich = chieuDai * chieuRong
    let chuVi = ( chieuDai*1 + chieuRong*1) *2

    let result_4 = `Diện tích HCN là: ${dienTich} , Chu vi HCN là: ${chuVi}`
    let pInfo_4 = document.getElementById("pInfo_4")
    pInfo_4.innerHTML = result_4
}


 
 
 
  