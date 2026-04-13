document.addEventListener("DOMContentLoaded", () => {

    // ===== ТИТУЛЬНАЯ =====
    window.startProject = function () {
        const titlePage = document.getElementById("title-page");
        const mainContent = document.getElementById("main-content");
        if (titlePage && mainContent) {
            titlePage.style.display = "none";
            mainContent.classList.add("show");
        }
    }

    window.showTitlePage = function () {
        const titlePage = document.getElementById("title-page");
        const mainContent = document.getElementById("main-content");
        if (titlePage && mainContent) {
            titlePage.style.display = "flex";
            mainContent.classList.remove("show");
            window.scrollTo(0, 0);
        }
    }

    // ===== ПРОГРЕСС =====
    function updateProgress() {
        const totalSteps = 10;
        let completed = 0;
        
        for (let i = 1; i <= totalSteps; i++) {
            if (localStorage.getItem(`quiz_step_${i}`) === "true") {
                completed++;
            }
        }
        
        const percent = Math.round((completed / totalSteps) * 100);
        const fill = document.getElementById("progress-fill");
        const percentSpan = document.getElementById("progress-percent");
        
        if (fill) fill.style.width = percent + "%";
        if (percentSpan) percentSpan.innerText = percent + "%";
    }

    // ===== КВИЗЫ =====
    document.querySelectorAll('.quiz-block').forEach(block => {
        const step = block.dataset.step;
        const options = block.querySelectorAll('.quiz-option');
        const feedback = block.querySelector('.quiz-feedback');
        
        // Проверяем, был ли уже пройден этот квиз
        if (localStorage.getItem(`quiz_step_${step}`) === "true") {
            block.style.opacity = "0.7";
            if (feedback) feedback.innerHTML = "✅ Этот раздел пройден!";
        }
        
        options.forEach(opt => {
            opt.addEventListener('click', () => {
                // Если уже пройдено - не даём отвечать снова
                if (localStorage.getItem(`quiz_step_${step}`) === "true") {
                    if (feedback) feedback.innerHTML = "✅ Ты уже прошёл этот тест!";
                    return;
                }
                
                const isCorrect = opt.dataset.correct === "true";
                
                if (isCorrect) {
                    opt.classList.add('correct');
                    if (feedback) {
                        feedback.innerHTML = "✅ Правильно! Молодец! +1 балл к прогрессу";
                        feedback.style.color = "#00ff88";
                    }
                    localStorage.setItem(`quiz_step_${step}`, "true");
                    block.style.opacity = "0.7";
                    updateProgress();
                } else {
                    opt.classList.add('incorrect');
                    if (feedback) {
                        feedback.innerHTML = "❌ Неправильно. Попробуй ещё раз!";
                        feedback.style.color = "#ff6b6b";
                    }
                    setTimeout(() => {
                        opt.classList.remove('incorrect');
                    }, 1000);
                }
                
                // Блокируем остальные кнопки после правильного ответа
                if (isCorrect) {
                    options.forEach(o => {
                        o.disabled = true;
                        o.style.opacity = "0.6";
                    });
                }
            });
        });
    });

    // ===== СКРОЛЛ ВВЕРХ =====
    const scrollBtn = document.getElementById("scroll-to-top");
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            scrollBtn.style.opacity = window.scrollY > 300 ? "1" : "0";
        });
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ===== ЧАТ =====
    const chat = document.getElementById("support-chat");
    const chatBtn = document.getElementById("chatButton");
    const closeChat = document.getElementById("closeChat");
    const sendBtn = document.getElementById("sendMessage");
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");

    if (chatBtn) chatBtn.addEventListener("click", () => chat.classList.toggle("active"));
    if (closeChat) closeChat.addEventListener("click", () => chat.classList.remove("active"));

    function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        const msg = document.createElement("div");
        msg.className = "message user";
        msg.innerHTML = `<div class="message-content">${text}</div>`;
        messages.appendChild(msg);
        input.value = "";

        setTimeout(() => {
            const bot = document.createElement("div");
            bot.className = "message bot";
            bot.innerHTML = `<div class="message-content">🤖 Спасибо за вопрос! Продолжай изучение шагов.</div>`;
            messages.appendChild(bot);
            messages.scrollTop = messages.scrollHeight;
        }, 500);
    }

    if (sendBtn) sendBtn.addEventListener("click", sendMessage);
    if (input) input.addEventListener("keypress", e => { if (e.key === "Enter") sendMessage(); });

    // ===== ПЕСОЧНИЦА =====
    const html = document.getElementById("html-code");
    const css = document.getElementById("css-code");
    const js = document.getElementById("js-code");
    const run = document.getElementById("run-code");
    const reset = document.getElementById("reset-code");
    const save = document.getElementById("save-project");
    const frame = document.getElementById("preview-frame");

    if (run) {
        run.addEventListener("click", () => {
            if (frame && html && css && js) {
                frame.srcdoc = html.value + `<style>${css.value}</style>` + `<script>${js.value}<\/script>`;
            }
        });
    }

    if (reset) {
        reset.addEventListener("click", () => {
            if (html) html.value = "";
            if (css) css.value = "";
            if (js) js.value = "";
            if (frame) frame.srcdoc = "";
        });
    }

    if (save) {
        save.addEventListener("click", () => {
            if (html && css && js) {
                localStorage.setItem("playground_html", html.value);
                localStorage.setItem("playground_css", css.value);
                localStorage.setItem("playground_js", js.value);
                alert("Проект сохранён! 🎉");
            }
        });
        if (localStorage.getItem("playground_html")) html.value = localStorage.getItem("playground_html");
        if (localStorage.getItem("playground_css")) css.value = localStorage.getItem("playground_css");
        if (localStorage.getItem("playground_js")) js.value = localStorage.getItem("playground_js");
    }

    // ===== ВКЛАДКИ =====
    const tabs = document.querySelectorAll(".editor-tabs button");
    const panels = document.querySelectorAll(".code-panel");

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const targetTab = tab.dataset.tab;
            tabs.forEach(t => t.classList.remove("tab-active"));
            panels.forEach(p => p.classList.remove("active"));
            tab.classList.add("tab-active");
            const activePanel = document.querySelector(`.${targetTab}-panel`);
            if (activePanel) activePanel.classList.add("active");
        });
    });

    // ===== ЖИВОЙ COLOR PICKER (CSS интерактив) =====
    const colorPicker = document.getElementById("liveColorPicker");
    const colorBlock = document.getElementById("colorDemoBlock");
    const generatedCSS = document.getElementById("generatedCSS");
    
    if (colorPicker && colorBlock) {
        colorPicker.addEventListener("input", (e) => {
            const newColor = e.target.value;
            colorBlock.style.background = newColor;
            if (generatedCSS) {
                generatedCSS.innerText = `background: ${newColor};`;
            }
        });
    }

    // ===== АНИМАЦИЯ ПОЯВЛЕНИЯ =====
    const fadeElements = document.querySelectorAll('.code-example');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });

    // Инициализация прогресса
    updateProgress();
});