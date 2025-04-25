// --------------------------- Bài 2 ------------------
/**
 ** Đầu vào
 - Nhập 5 số thực bằng prompt
 -
 ** Xử lý
 - Tính giá trị trung bình 5 số thực
 - tb = (a*b*c*d*e)/5
 -
 ** Đầu ra
 * Điểm trung bình
 */

let btnTB5So = document.getElementById("btnTB5So")
btnTB5So.onclick = function(){
    let so_1 = document.getElementById("so_1").value*1
    let so_2 = document.getElementById("so_2").value*1
    let so_3 = document.getElementById("so_3").value*1
    let so_4 = document.getElementById("so_4").value*1
    let so_5 = document.getElementById("so_5").value*1
    
    let dtb = (so_1 + so_2 + so_3 + so_4 + so_5)/5 

    let result_2 = `Điểm trung bình là: ${dtb}`
    let pInfo_2 = document.getElementById("pInfo_2")
    pInfo_2.innerHTML = result_2
}

 