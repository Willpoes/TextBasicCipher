function encrypt() {
    const inputText = document.getElementById("text-input").value;
    // Placeholder encryption (example only, replace with your logic)
    const encryptedText = inputText.split('').reverse().join('');
    document.getElementById("text-output").value = encryptedText;
  }
  
  function decrypt() {
    const encryptedText = document.getElementById("text-input").value;
    // Placeholder decryption (example only, replace with your logic)
    const decryptedText = encryptedText.split('').reverse().join('');
    document.getElementById("text-output").value = decryptedText;
  }
  
  function copyText() {
    const outputText = document.getElementById("text-output");
    outputText.select();
    document.execCommand("copy");
    alert("Texto copiado!");
  }
  