document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("mental-health-form");
    const resultDiv = document.getElementById("result");
    const scoreText = document.getElementById("score");
    const stressLevelText = document.getElementById("stress-level");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        let score = 0;
        const formData = new FormData(form);

        // Menghitung jumlah jawaban "iya"
        formData.forEach((value) => {
            if (value === "iya") {
                score++;
            }
        });

        // Menentukan tingkat stres berdasarkan jumlah jawaban "iya"
        let stressLevel = "";
        if (score === 0) {
            stressLevel = "Tidak ada tanda stres";
        } else if (score <= 3) {
            stressLevel = "Stres rendah! Kamu melakukan pekerjaan yang hebat, jangan biarkan hal-hal kecil mengganggu semangatmu.";
        } else if (score <= 6) {
            stressLevel = "Stres sedang! Jangan ragu untuk berbagi perasaanmu dengan teman atau keluarga; mereka bisa memberikan dukungan dan perspektif baru.";
        } else {
            stressLevel = "Stres berat! Pertimbangkan untuk berbicara dengan konselor atau terapis yang bisa membantu mengelola stres berat.";
        }

        // Menampilkan skor dan tingkat stres
        scoreText.textContent = `Skor Anda: ${score} dari 10`;
        stressLevelText.textContent = `Tingkat Stres: ${stressLevel}`;

        // Menyembunyikan formulir dan menampilkan hasil
        form.style.display = "none";
        resultDiv.style.display = "block";
    });
});
