function hideNotificationBadge() {
    const notificationBadge = document.querySelector('.notification-badge--qn7NG.notification-badge--has-border---vMcH.avatar-badge[data-t="red-notification-sign"]');
    if (notificationBadge) {
      notificationBadge.style.display = 'none';
    }
  }
  
  // Initial attempt to hide the badge
  hideNotificationBadge();
  
  // Observer to watch for future changes
  const observer = new MutationObserver((mutationsList) => {
    for (let mutation of mutationsList) {
      if (mutation.addedNodes.length > 0) {
        hideNotificationBadge();
      }
    }
  });
  
  // Observe the document body for added nodes
  observer.observe(document.body, { childList: true, subtree: true });
  