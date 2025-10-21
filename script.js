// LOGIN HANDLER
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const error = document.getElementById('loginError');

  if (username === 'user' && password === '1234') {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('dressPage').classList.remove('hidden');
  } else {
    error.textContent = 'Invalid username or password';
  }
});

// DRESS FORM SUBMIT — SHOW ORDER PREVIEW
document.getElementById('dressForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Basic Details
  const dressType = document.getElementById('dressType').value;
  const fabric = document.getElementById('fabric').value;
  const color = document.getElementById('color').value;

  // Design Details
  const neckDesign = document.getElementById('neckDesign').value;
  const backNeck = document.getElementById('backNeck').value;
  const sleeveDesign = document.getElementById('sleeveDesign').value;
  const dressLength = document.getElementById('dressLength').value;
  const bottomStyle = document.getElementById('bottomStyle').value;
  const embroidery = document.getElementById('embroidery').checked ? 'Yes' : 'No';
  const lining = document.querySelector('input[name="lining"]:checked')?.value || "Not selected";
  const customNotes = document.getElementById('customNotes').value;

  // Measurements
  const bust = document.getElementById('bust').value;
  const waist = document.getElementById('waist').value;
  const hip = document.getElementById('hip').value;

  // Image
  const imageInput = document.getElementById('referenceImage');
  const file = imageInput.files[0];

  // Fill Preview
  document.getElementById('previewDressType').innerText = dressType;
  document.getElementById('previewFabric').innerText = fabric;
  document.getElementById('previewColor').innerText = color;
  document.getElementById('previewNeckDesign').innerText = neckDesign;
  document.getElementById('previewBackNeck').innerText = backNeck;
  document.getElementById('previewSleeveDesign').innerText = sleeveDesign;
  document.getElementById('previewLength').innerText = dressLength;
  document.getElementById('previewBottomStyle').innerText = bottomStyle;
  document.getElementById('previewEmbroidery').innerText = embroidery;
  document.getElementById('previewLining').innerText = lining;
  document.getElementById('previewNotes').innerText = customNotes;

  document.getElementById('previewBust').innerText = bust + '"';
  document.getElementById('previewWaist').innerText = waist + '"';
  document.getElementById('previewHip').innerText = hip + '"';

  // Show Image Preview
  const previewImage = document.getElementById('previewImage');
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      previewImage.src = e.target.result;
    };
    reader.readAsDataURL(file);
  } else {
    previewImage.src = '';
  }

  // Toggle Views
  document.getElementById('orderPreview').classList.remove('hidden');
  document.getElementById('successMessage').classList.add('hidden');
});

// FINAL ORDER SUBMISSION
function submitOrder() {
  document.getElementById('orderPreview').classList.add('hidden');
  document.getElementById('successMessage').classList.remove('hidden');

  // Reset form
  document.getElementById('dressForm').reset();
  document.getElementById('previewImage').src = '';
}
