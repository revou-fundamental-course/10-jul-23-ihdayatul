function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (isNaN(weight) || isNaN(height) || height <= 0) {
        document.getElementById('result').innerText = "Masukkan berat dan tinggi badan yang valid.";
        return;
    }

    const heightInMeter = height / 100; // Convert cm to meter
    const bmi = weight / (heightInMeter ** 2);
    const roundedBMI = bmi.toFixed(2);

    let category;
    if (bmi < 18.5) {
        category = "Berat Badan Kurang";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = "Berat Badan Normal";
    } else if (bmi >= 25 && bmi < 29.9) {
        category = "Berat Badan Berlebih";
    } else {
        category = "Obesitas";
    }

    document.getElementById('result').innerText = `BMI Anda: ${roundedBMI}\nKategori: ${category}`;
}

document.getElementById('calculateButton').addEventListener('click', calculateBMI);
