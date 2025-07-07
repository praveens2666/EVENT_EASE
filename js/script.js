// Hamburger toggle
document.getElementById('hamburger').onclick = function() {
  const ul = document.querySelector('nav ul');
  ul.style.display = (ul.style.display === 'flex') ? 'none' : 'flex';
}

// Modal functions
function openModal(title, desc, videoUrl) {
  // Create modal if not exists
  let modal = document.getElementById('videoModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'videoModal';
    modal.className = 'modal fade';
    modal.tabIndex = -1;
    modal.innerHTML = `
      <div class="modal-dialog modal-lg modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="videoModalLabel"></h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="ratio ratio-16x9">
              <video id="modalVideo" controls></video>
            </div>
            <p class="mt-3" id="videoModalDesc"></p>
          </div>
        </div>
      </div>`;
    document.body.appendChild(modal);
  }
  document.getElementById('videoModalLabel').innerText = title;
  document.getElementById('videoModalDesc').innerText = desc;
  const video = document.getElementById('modalVideo');
  video.src = videoUrl;
  video.currentTime = 0;
  video.play();
  var bsModal = new bootstrap.Modal(modal);
  bsModal.show();
  modal.addEventListener('hidden.bs.modal', function() { video.pause(); video.currentTime = 0; });
}

// Gallery filter
function filterGallery(category) {
  const items = document.querySelectorAll('.gallery-item');
  items.forEach(item => {
    if (category === 'all' || item.classList.contains(category)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Form validation
function validateForm() {
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !subject || !message) {
    alert('Please fill out all fields.');
    return false;
  }
  if (!email.includes('@')) {
    alert('Please enter a valid email.');
    return false;
  }
  alert('Message sent successfully!');
  return false; // prevent real submit for demo
}

