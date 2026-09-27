// Service worker: clicking the toolbar icon opens the dashboard, or focuses it if already open.

const DASHBOARD_URL = chrome.runtime.getURL('dashboard.html');

async function openDashboard(): Promise<void> {
  const [existing] = await chrome.runtime.getContexts({
    contextTypes: [chrome.runtime.ContextType.TAB],
    documentUrls: [DASHBOARD_URL],
  });
  if (existing && existing.tabId !== -1) {
    await chrome.tabs.update(existing.tabId, { active: true });
    await chrome.windows.update(existing.windowId, { focused: true });
  } else {
    await chrome.tabs.create({ url: DASHBOARD_URL });
  }
}

chrome.action.onClicked.addListener(() => {
  openDashboard().catch((error: unknown) => console.error('Could not open the dashboard', error));
});
