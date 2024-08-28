$(document).ready(function() {
    // Thời gian mục tiêu (ví dụ: 31/12/2024 23:59:59)
    var countDownDate = new Date("Sep 19, 2024 23:59:59").getTime();

    // Cập nhật mỗi giây
    var x = setInterval(function() {

        // Lấy thời gian hiện tại
        var now = new Date().getTime();

        // Tính thời gian còn lại
        var distance = countDownDate - now;

        // Tính toán ngày, giờ, phút, giây
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Hiển thị kết quả bằng jQuery
        $('.timer_title').html('Đám cưới sẽ được diễn ra sau <br class="br640"> <span class="day_time">' + days + '</span> ngày <span class="day_time">' + hours + '</span> giờ <span class="day_time">'
        + minutes + '</span> phút <span class="day_time">' +seconds+ '</span> giây nữa.');

        // Nếu đếm ngược kết thúc
        if (distance < 0) {
            clearInterval(x);
            $('.timer_title').html("Đếm ngược đã kết thúc");
        }
    }, 1000);
});