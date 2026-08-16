const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];

function panelForTarget(target) {
    if (!target) return document.getElementById('home');
    return target.matches('[role="tabpanel"]') ? target : target.closest('[role="tabpanel"]');
}

function activateTab(panelId, options = {}) {
    const { updateHash = true, scrollTarget = null, focusTab = false } = options;
    const panel = document.getElementById(panelId) || document.getElementById('home');
    const tab = document.getElementById(`tab-${panel.id}`);

    panels.forEach((item) => { item.hidden = item !== panel; });
    tabs.forEach((item) => {
        const selected = item === tab;
        item.classList.toggle('active', selected);
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
    });

    if (focusTab) tab?.focus();
    if (updateHash) history.pushState(null, '', `#${scrollTarget?.id || panel.id}`);

    requestAnimationFrame(() => {
        if (scrollTarget && scrollTarget !== panel) {
            scrollTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

function openHash(hash, updateHash = false) {
    const id = hash.replace(/^#/, '') || 'home';
    const target = document.getElementById(id);
    const panel = panelForTarget(target) || document.getElementById('home');
    activateTab(panel.id, { updateHash, scrollTarget: target });
}

document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;

    const id = link.getAttribute('href').slice(1) || 'home';
    const target = document.getElementById(id);
    const panel = panelForTarget(target);
    if (!panel) return;

    event.preventDefault();
    activateTab(link.dataset.tab || panel.id, { scrollTarget: target });
});

document.querySelector('.tab-list')?.addEventListener('keydown', (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(event.key)) return;
    event.preventDefault();

    const current = tabs.indexOf(document.activeElement);
    let next = current;
    if (event.key === 'ArrowRight') next = (current + 1) % tabs.length;
    if (event.key === 'ArrowLeft') next = (current - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    activateTab(tabs[next].dataset.tab, { focusTab: true });
});

window.addEventListener('hashchange', () => openHash(window.location.hash));
openHash(window.location.hash);
