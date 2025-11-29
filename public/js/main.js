function openTab(evt, tabName) {
  document.querySelectorAll('#raider-v1 .tab-content').forEach(tab => tab.classList.remove('active'));
  document.querySelectorAll('#raider-v1 .tab-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById(tabName).classList.add('active');
  evt.currentTarget.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.section');
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const sidebar = document.querySelector('.sidebar');

  const showSection = (id) => {
    sections.forEach(sec => sec.classList.remove('active'));
    links.forEach(l => l.classList.remove('active'));
    const targetSection = document.getElementById(id);
    const targetLink = document.querySelector(`a[href="#${id}"]`);
    if (targetSection) targetSection.classList.add('active');
    if (targetLink) targetLink.classList.add('active');
  };

  links.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = link.getAttribute('href').substring(1);
      showSection(target);
      if (window.innerWidth <= 900) {
        sidebar.classList.remove('open');
      }
      history.pushState(null, null, `#${target}`);
    });
  });

  mobileBtn.addEventListener('click', () => {
    sidebar.classList.toggle('open');
  });

  const hash = location.hash.substring(1) || 'home';
  showSection(hash);

  if (hash === 'raider-v1') {
    setTimeout(() => {
      document.querySelector('#raider-v1 .tab-btn.active')?.click();
    }, 100);
  }
});