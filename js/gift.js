const copyButton = document.getElementById("copyRekening");

if(copyButton){

    copyButton.addEventListener("click", () => {

        const nomor = document.getElementById("rekening").innerText;

        navigator.clipboard.writeText(nomor);

        copyButton.innerHTML = "✅ Nomor Berhasil Disalin";

        setTimeout(() => {

            copyButton.innerHTML = "📋 Salin Nomor Rekening";

        },2000);

    });

}