async function predict() {
  const fileInput = document.getElementById("imageInput");
  const resultDiv = document.getElementById("result");

  if (!fileInput.files.length) {
    resultDiv.innerText = "⚠️ Pilih gambar dulu";
    return;
  }

  resultDiv.innerText = "⏳ Memproses...";

  const formData = new FormData();
  formData.append("file", fileInput.files[0]);

  const response = await fetch(
    "https://yogssss-projek-akhir.hf.space",
    {
      method: "POST",
      body: JSON.stringify({
        data: [null]
      }),
      headers: {
        "Content-Type": "application/json"
      }
    }
  );

  const result = await response.json();

  // ambil output text dari gradio
  resultDiv.innerText = "✅ " + result.data[0];
}
