
/* Mengambil elemen layar kalkulator */
const display = document.getElementById("display");

/* Mengambil semua tombol */
const buttons = document.querySelectorAll("button");

/* Menyimpan angka dan operator yang ditekan */
let currentInput = "";

/* Menjalankan kode ketika tombol ditekan */
buttons.forEach(button => {
    button.addEventListener("click", () => {

        /* Mengambil tulisan dari tombol */
        const value = button.textContent;

        /* Jika tombol C ditekan */
        if (value === "C") {
            currentInput = "";
            display.value = "0";
        }

        /* Jika tombol sama dengan ditekan */
        else if (value === "=") {
            try {
                const expression = currentInput
                    .replace(/×/g, "*")
                    .replace(/÷/g, "/");

                const result = Function(
                    `"use strict"; return (${expression})`
                )();

                currentInput = String(result);
                display.value = currentInput;
            } catch {
                display.value = "Error";
                currentInput = "";
            }
        }

        /* Jika tombol angka atau operator ditekan */
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});