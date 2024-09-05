const inputElement = document.getElementById('userInput');
        const buttonElement = document.getElementById('submitButton');

        // Fungsi untuk menangani klik tombol
        function handleButtonClick() {
            const userInputValue = inputElement.value;
            alert('Terimakasih, ini hanya hiasan jadi tidak terkirim sungguhan dan hanya notifikasi.')
            }

        // Tambahkan event listener ke tombol
        buttonElement.addEventListener('click', handleButtonClick);