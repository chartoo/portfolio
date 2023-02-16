document.addEventListener("DOMContentLoaded", function(){
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.getElementById('navbar_top').classList.add('bg-dark-sticky');
        } else {
            document.getElementById('navbar_top').classList.remove('bg-dark-sticky');
        } 
    });
    }); 

document.addEventListener('contextmenu', (e) => e.preventDefault());

function ctrlShiftKey(e, keyCode) {
  return e.ctrlKey && e.shiftKey && e.keyCode === keyCode.charCodeAt(0);
}

document.onkeydown = (e) => {
  // Disable F12, Ctrl + Shift + I, Ctrl + Shift + J, Ctrl + U
  if (
    event.keyCode === 123 ||
    ctrlShiftKey(e, 'I') ||
    ctrlShiftKey(e, 'J') ||
    ctrlShiftKey(e, 'C') ||
    (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0))
  )
    return false;
};

var currentLocation=window.location.href;
document.getElementById("fb-share-link-icon").href = "https://www.facebook.com/sharer/sharer.php?u="+currentLocation+"&_rdr";
document.getElementById("twitter-share-link-icon").href = "https://twitter.com/intent/tweet?url="+currentLocation;
document.getElementById("linkedin-share-link-icon").href = "https://www.linkedin.com/sharing/share-offsite/?url="+currentLocation;