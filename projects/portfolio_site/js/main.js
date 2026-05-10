document.addEventListener("DOMContentLoaded", () => {
    const progressBars = document.querySelectorAll('.skill-progress');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                // Lấy data-width từ HTML để set làm biến CSS nội bộ
                const width = bar.getAttribute('data-width') || '0%';
                bar.style.setProperty('--progress-width', width);
                bar.classList.add('animate');
                observer.unobserve(bar); // Chỉ chạy 1 lần
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
});