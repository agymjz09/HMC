let saran = document.getElementById("D3");
let komentar = document.getElementById("D4");
let submit = document.getElementById("submit").addEventListener('click', function(){
    if (saran.value == '') {
        swal("Opps", "silahkan diisi terlebih dahulu", "error")
    }else {
        swal("TERIMA KASIH", "kritik dan saran anda kami terima", "success").then(function() {
            window.location.href = 'index.html';
        });
    }
})
    