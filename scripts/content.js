console.log('[IS] Matches this URL from Manifest. Loading Script.');

console.log(window.location.href);

// Obtendo subdomínio
const actualInstance = window.location.host.split('.')[0];

document.title = `${actualInstance}`;

setInterval(() => {
  document.title = `${actualInstance}`;
  console.log('[IS] Changing tab title');
}, 5000);
