3️⃣ JavaScript File (script.js)

document.getElementById("uploadBtn").addEventListener("change", previewPhoto);

function previewPhoto(event) {

  var reader = new FileReader();

  reader.onload = function() {

    var output = document.getElementById("profilePic");

    output.src = reader.result;

  };

  reader.readAsDataURL(event.target.files[0]);

}