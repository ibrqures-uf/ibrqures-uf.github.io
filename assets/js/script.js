document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.querySelector('#checkbox');
    const currentTheme = localStorage.getItem('theme');

    // Apply saved theme on load
    if (currentTheme) {
        document.documentElement.setAttribute('data-theme', currentTheme);
        if (currentTheme === 'dark') {
            toggleSwitch.checked = true;
        }
    } else {
        // Default to dark theme as requested by the plan
        document.documentElement.setAttribute('data-theme', 'dark');
        toggleSwitch.checked = true;
    }

    // Handle theme toggle
    function switchTheme(e) {
        if (e.target.checked) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }    
    }

    if(toggleSwitch) {
        toggleSwitch.addEventListener('change', switchTheme, false);
    }

    // Smooth scroll for dock items
    const dockItems = document.querySelectorAll('.dock-item');
    dockItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const section = item.getAttribute('data-section');
            if (section) {
                e.preventDefault();
                if(section === 'home') {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                } else if(section === 'projects') {
                    const projectEl = document.getElementById('projects');
                    if(projectEl) {
                        projectEl.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            }
        });
    });
});
