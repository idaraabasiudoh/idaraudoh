import fs from 'fs';
let content = fs.readFileSync('src/main.ts', 'utf-8');

const overlayFunc = `function openExternalOverlay(url: string) {
    const overlayEl = document.getElementById('external-overlay');
    const iframeEl = document.getElementById('external-iframe') as HTMLIFrameElement;
    const urlBarEl = document.getElementById('external-url') as HTMLInputElement;
    const openBtnEl = document.getElementById('external-open-btn') as HTMLAnchorElement;
    const fallbackBtnEl = document.getElementById('external-open-btn-fallback') as HTMLAnchorElement;

    if (overlayEl && iframeEl && urlBarEl && openBtnEl) {
      iframeEl.style.display = 'block';
      iframeEl.src = url;
      
      let displayUrl = url.replace('https://', '').replace('http://', '');
      if (displayUrl.endsWith('/')) displayUrl = displayUrl.slice(0, -1);
      urlBarEl.value = displayUrl;
      openBtnEl.href = url;
      if (fallbackBtnEl) fallbackBtnEl.href = url;
      overlayEl.classList.add('show');
      
      // Timeout to default to fallback UI if the website breaks or doesn't respond
      const fallbackUi = document.querySelector('.external-fallback-ui') as HTMLElement;
      if (fallbackUi) {
        const h2 = fallbackUi.querySelector('h2');
        if (h2) h2.textContent = 'Loading External Site...';
      }

      if ((window as any).fallbackTimeout) clearTimeout((window as any).fallbackTimeout);
      
      (window as any).fallbackTimeout = setTimeout(() => {
         iframeEl.style.display = 'none';
         if (fallbackUi) {
           const h2 = fallbackUi.querySelector('h2');
           if (h2) h2.textContent = 'Website not responding';
         }
      }, 6000);

      iframeEl.onload = () => {
         clearTimeout((window as any).fallbackTimeout);
      };

      iframeEl.onerror = () => {
         clearTimeout((window as any).fallbackTimeout);
         iframeEl.style.display = 'none';
         if (fallbackUi) {
           const h2 = fallbackUi.querySelector('h2');
           if (h2) h2.textContent = 'Website broke or refused to connect';
         }
      };
    }
}`;

content = content.replace(/function openExternalOverlay\([\s\S]*?\n\}/, overlayFunc);

fs.writeFileSync('src/main.ts', content);
