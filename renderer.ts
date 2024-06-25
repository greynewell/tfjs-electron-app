document.getElementById('predict')?.addEventListener('click', async () => {
    const input = (document.getElementById('input') as HTMLInputElement).value;
    const result = await window.electronAPI.runPrediction(parseFloat(input));
    (document.getElementById('result') as HTMLParagraphElement).innerText = `Prediction: ${result}`;
});