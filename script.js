
document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const offcanvas = document.getElementById("offcanvas");
    const toggleIcon = document.getElementById("toggleIcon");
    const progressBar = document.getElementById("progressBar");
    const progressPercent = document.getElementById("progressPercent");

    startButton.addEventListener("click", function() {
        offcanvas.style.display = "flex";
        let width = 0;
        const interval = setInterval(function() {
            if (width >= 100) {
                clearInterval(interval);
                offcanvas.style.display = "none";
                showAlert("✓", "Success", "Migration process has been completed successfully.");
            } else {
                width++;
                progressBar.style.width = width + "%";
                progressPercent.textContent = width + "%";
            }
        }, 100);
    });

    toggleIcon.addEventListener("click", function() {
        if (offcanvas.style.display === "flex") {
            offcanvas.style.display = "none";
            toggleIcon.textContent = "🔽";
        } else {
            offcanvas.style.display = "flex";
            toggleIcon.textContent = "🔼";
        }
    });

    function showAlert(symbol, heading, message) {
        const alertBox = document.querySelector('.custom-alert');
        alertBox.querySelector('.alert-symbol').innerText = symbol;
        alertBox.querySelector('.alert-heading').innerText = heading;
        alertBox.querySelector('.alert-paragraph').innerText = message;
        alertBox.style.display = 'flex';

        setTimeout(() => {
            alertBox.style.display = 'none';
        }, 3000);
    }

    window.closeAlert = function() {
        const alertBox = document.querySelector('.custom-alert');
        alertBox.style.display = 'none';
    }
});