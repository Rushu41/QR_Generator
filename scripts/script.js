const qrInput = document.getElementById('qr-input');
const size = document.getElementById('sizes');
const generate = document.getElementById('genBtn');
const download = document.getElementById('dwnBtn');

const qrContain = document.querySelector('.qr-body');
let qrCode;

function filterSizeOptions() {
  const isMobile = window.innerWidth <= 768; 
  const options = size.querySelectorAll('option');
  options.forEach(option => {
    const value = parseInt(option.value);
    if (isMobile && (value < 100 || value > 300)) {
      option.style.display = 'none';
    } else {
      option.style.display = 'block';
    }
  });
}

filterSizeOptions();
window.addEventListener('resize', filterSizeOptions);

generate.addEventListener('click', () => {
  if (qrInput.value.length > 0) {
    generateQR();
  } else {
    alert("Please Enter a Value");
  }
});

function generateQR() {
  const sizeValue = size.value;
  qrContain.innerHTML = "";
  qrCode = new QRCode(qrContain, {
    text: qrInput.value,
    width: parseInt(sizeValue),
    height: parseInt(sizeValue),
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H
  });
}

download.addEventListener('click', function () {
  if (qrCode) {
    const qrCanvas = qrContain.querySelector('canvas');
    if (qrCanvas) {
      const imgData = qrCanvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = imgData;
      link.download = 'qrcode.png';
      link.click();
    }
  }
});