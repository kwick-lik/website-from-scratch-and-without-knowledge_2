document.addEventListener("DOMContentLoaded", () => {

    // ==================== БАЗА ОТВЕТОВ (встроенная) ====================
    const answersDB = {
        1: {
            "Зачем нужен редактор кода?": "Редактор кода ускоряет работу в 3-5 раз: подсветка синтаксиса, автодополнение, подсказки, расширения (Live Server). Без него сложно и долго. Подробнее в Шаге 1.",
            "Какой редактор выбрать?": "VS Code — лучший для начинающих (бесплатный, много расширений). Если компьютер слабый — Sublime Text или онлайн Replit. Шаг 1.",
            "Почему VS Code лучше блокнота?": "VS Code даёт подсветку кода, автодополнение тегов, встроенный терминал, расширения (Live Server). Блокнот этого не умеет."
        },
        2: {
            "Пошаговая установка VS Code": "1) Скачай с code.visualstudio.com. 2) Запусти установщик. 3) Открой VS Code. 4) Для русского языка: Ctrl+Shift+P → Configure Display Language → Russian. Шаг 2.",
            "Какие расширения установить?": "Live Server (автообновление), Prettier (форматирование), Material Icon Theme (иконки), Russian Language Pack (русский). Шаг 2.",
            "Как пользоваться Live Server?": "Установи расширение, открой папку с проектом, нажми правой кнопкой на index.html → Open with Live Server. Страница обновляется при сохранении. Шаг 2.",
            "Зачем нужен Prettier?": "Prettier автоматически форматирует код: расставляет отступы, кавычки, переносы. Код становится красивым и единообразным."
        },
        3: {
            "Зачем нужна структура папок?": "Чтобы быстро находить файлы, подключать их по понятным путям, легко передавать проект и готовить к публикации. Шаг 3.",
            "Как создать структуру в VS Code?": "Открой папку, создай папки css/, js/, images/, файлы index.html, css/style.css, js/script.js. Шаг 3."
        },
        4: {
            "Что такое HTML?": "HTML — язык разметки для структуры страницы. Состоит из тегов: <h1>, <p>, <a>, <img> и других. Шаг 4.",
            "Базовый шаблон index.html": "<!DOCTYPE html><html><head><meta charset='UTF-8'><title>...</title><link rel='stylesheet' href='css/style.css'></head><body>...</body></html>. Шаг 4.",
            "Самые важные теги": "h1-h6 (заголовки), p (абзац), a (ссылка), img (картинка), ul/ol (списки), div (контейнер), span (строчный), button (кнопка). Шаг 4.",
            "Что такое тег?": "Тег — это команда для браузера. Открывающий и закрывающий: <название>содержимое</название>."
        },
        5: {
            "Что такое CSS?": "CSS — язык стилей. Отвечает за цвета, шрифты, отступы, расположение, анимации. Без CSS сайт выглядит как чёрно-белый документ. Шаг 5.",
            "Как писать CSS-правила?": "Селектор { свойство: значение; }. Например, body { background: #0f172a; color: white; }. Шаг 5.",
            "Как подключить CSS к HTML?": "В <head> добавь <link rel='stylesheet' href='css/style.css'>. Шаг 5.",
            "Что такое Flexbox?": "Flexbox — способ выравнивания. Напиши родителю display: flex; justify-content: center; align-items: center; — ребёнок окажется по центру."
        },
        6: {
            "Что такое JavaScript?": "JavaScript делает сайт живым: реагирует на клики, меняет стили, отправляет данные, создаёт игры и анимации. Шаг 6.",
            "Пример скрипта": "const h1 = document.querySelector('h1'); h1.addEventListener('click', () => alert('Привет!')); Шаг 6.",
            "Как подключить JS?": "Перед закрывающим </body> добавь <script src='js/script.js'></script>. Шаг 6.",
            "Что такое событие click?": "Событие 'click' срабатывает при клике на элемент. Используется с addEventListener."
        },
        7: {
            "Что такое адаптивность?": "Адаптивность — когда сайт хорошо выглядит и на компьютере, и на телефоне. Используются медиа-запросы. Шаг 7.",
            "Как сделать медиа-запросы?": "@media (max-width: 768px) { ... } для планшетов, @media (max-width: 480px) { ... } для телефонов. Шаг 7.",
            "Как проверить адаптивность?": "F12 → иконка телефона → выбери устройство. Шаг 7."
        },
        8: {
            "Как запустить сайт для тестирования?": "Установи Live Server в VS Code, нажми правой кнопкой на index.html → Open with Live Server. Откроется http://localhost:5500. Шаг 8.",
            "Инструменты разработчика (DevTools)": "F12: Elements (правка HTML/CSS), Console (ошибки JS), Network (загрузка файлов), Device Toolbar (режим телефона). Шаг 8."
        },
        9: {
            "Что такое оптимизация?": "Оптимизация — ускорение загрузки сайта до 2 секунд. Важно для удержания пользователей и SEO. Шаг 9.",
            "Что можно оптимизировать?": "Изображения (TinyPNG, WebP), CSS/JS (минификация), шрифты (не подключать много начертаний). Шаг 9.",
            "Как проверить скорость сайта?": "Google PageSpeed Insights, GTmetrix, Lighthouse (F12 → вкладка Lighthouse → Generate report). Шаг 9."
        },
        10: {
            "Что такое GitHub Pages?": "Бесплатный хостинг от GitHub. Сайт доступен по адресу username.github.io/репозиторий. Шаг 10.",
            "Пошаговая инструкция": "1) Регистрация на GitHub. 2) Новый репозиторий (Public). 3) Загрузка файлов. 4) Commit. 5) Settings → Pages → Branch main → Save. 6) Ждать 2 минуты. Шаг 10.",
            "Альтернативные хостинги": "Netlify (перетащи папку), Vercel, GitLab Pages, InfinityFree. Шаг 10."
        }
    };

    function getLocalAnswer(question) {
        const q = question.toLowerCase();
        for (let step in answersDB) {
            for (let sub in answersDB[step]) {
                if (q.includes(sub.toLowerCase())) {
                    return answersDB[step][sub];
                }
            }
        }
        return null;
    }

    // ==================== СТАРЫЕ ФУНКЦИИ (ПРОГРЕСС, ТЕСТЫ, ПЕСОЧНИЦА, ЦВЕТОПИКЕР) ====================
    window.startProject = function () {
        const titlePage = document.getElementById("title-page");
        const mainContent = document.getElementById("main-content");
        if (titlePage && mainContent) {
            titlePage.style.display = "none";
            mainContent.classList.add("show");
        }
    };

    window.showTitlePage = function () {
        const titlePage = document.getElementById("title-page");
        const mainContent = document.getElementById("main-content");
        if (titlePage && mainContent) {
            titlePage.style.display = "flex";
            mainContent.classList.remove("show");
            window.scrollTo(0, 0);
        }
    };

    function updateProgress() {
        const totalSteps = 10;
        let completed = 0;
        for (let i = 1; i <= totalSteps; i++) {
            if (localStorage.getItem(`quiz_step_${i}`) === "true") completed++;
        }
        const percent = Math.round((completed / totalSteps) * 100);
        const fill = document.getElementById("progress-fill");
        const percentSpan = document.getElementById("progress-percent");
        if (fill) fill.style.width = percent + "%";
        if (percentSpan) percentSpan.innerText = percent + "%";
    }

    document.querySelectorAll('.quiz-block').forEach(block => {
        const step = block.dataset.step;
        const options = block.querySelectorAll('.quiz-option');
        const feedback = block.querySelector('.quiz-feedback');
        if (localStorage.getItem(`quiz_step_${step}`) === "true") {
            block.style.opacity = "0.7";
            if (feedback) feedback.innerHTML = "✅ Этот раздел пройден!";
        }
        options.forEach(opt => {
            opt.addEventListener('click', () => {
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
                if (isCorrect) {
                    options.forEach(o => {
                        o.disabled = true;
                        o.style.opacity = "0.6";
                    });
                }
            });
        });
    });

    const scrollBtn = document.getElementById("scroll-to-top");
    if (scrollBtn) {
        window.addEventListener("scroll", () => {
            scrollBtn.style.opacity = window.scrollY > 300 ? "1" : "0";
        });
        scrollBtn.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // ==================== ЧАТ С КОНСТРУКТОРОМ И AI ====================
    const chat = document.getElementById("support-chat");
    const chatBtn = document.getElementById("chatButton");
    const closeChat = document.getElementById("closeChat");
    const sendBtn = document.getElementById("sendMessage");
    const input = document.getElementById("chat-input");
    const messages = document.getElementById("chat-messages");

    if (chatBtn) chatBtn.addEventListener("click", () => chat.classList.toggle("active"));
    if (closeChat) closeChat.addEventListener("click", () => chat.classList.remove("active"));

    // Конструктор вопросов
    const builder = document.getElementById("question-builder");
    const closeBuilder = document.getElementById("close-builder");
    const typeSelect = document.getElementById("question-type");
    const stepSelect = document.getElementById("step-select");
    const subSelect = document.getElementById("subheading-select");
    const askConstructedBtn = document.getElementById("ask-constructed");

    if (closeBuilder) {
        closeBuilder.addEventListener("click", () => {
            if (builder) builder.style.display = "none";
        });
    }

    // Обновление подзаголовков при выборе шага
    if (stepSelect && subSelect) {
        stepSelect.addEventListener("change", () => {
            const step = stepSelect.value;
            if (step && answersDB[step]) {
                const subs = Object.keys(answersDB[step]);
                subSelect.disabled = false;
                subSelect.innerHTML = '<option value="">Выбери подзаголовок</option>';
                subs.forEach(sub => {
                    const opt = document.createElement("option");
                    opt.value = sub;
                    opt.textContent = sub;
                    subSelect.appendChild(opt);
                });
            } else {
                subSelect.disabled = true;
                subSelect.innerHTML = '<option value="">Сначала выбери шаг</option>';
            }
        });
    }

    // Отправка вопроса из конструктора
    if (askConstructedBtn) {
        askConstructedBtn.addEventListener("click", () => {
            const type = typeSelect ? typeSelect.value : "";
            const step = stepSelect ? stepSelect.value : "";
            const sub = subSelect ? subSelect.value : "";
            if (!type || !step || !sub) {
                alert("Выбери тип вопроса, шаг и подзаголовок");
                return;
            }
            let answer = null;
            if (answersDB[step] && answersDB[step][sub]) {
                answer = answersDB[step][sub];
            }
            if (answer) {
                addBotMessage(answer);
            } else {
                addBotMessage(`😕 Ответ на "${type} ${sub}" пока не добавлен. Напиши мне на почту fedorkosivtsov@yandex.ru, я добавлю.`);
            }
            if (builder) builder.style.display = "none";
        });
    }

    function addBotMessage(text) {
        if (!messages) return;
        const botMsg = document.createElement("div");
        botMsg.className = "message bot";
        botMsg.innerHTML = `<div class="message-avatar">🤖</div><div class="message-content">${text}</div>`;
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
    }

    // AI функция (OpenRouter)
    async function askAI(question) {
        const API_KEY = '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'; // Замени на свой ключ
        try {
            const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${API_KEY}`,
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "model": "openrouter/free",
                    "messages": [{ "role": "user", "content": question }]
                })
            });
            if (!response.ok) return null;
            const data = await response.json();
            return data.choices[0].message.content;
        } catch (e) {
            return null;
        }
    }

    // Основная функция отправки сообщения (свободный ввод)
    async function sendMessage() {
        const text = input.value.trim();
        if (!text) return;

        const userMsg = document.createElement("div");
        userMsg.className = "message user";
        userMsg.innerHTML = `<div class="message-avatar">👤</div><div class="message-content">${text}</div>`;
        messages.appendChild(userMsg);
        input.value = "";

        let botAnswer = getLocalAnswer(text);
        if (!botAnswer) {
            const loading = document.createElement("div");
            loading.className = "message bot";
            loading.innerHTML = `<div class="message-avatar">🤖</div><div class="message-content">🤔 Думаю...</div>`;
            messages.appendChild(loading);
            messages.scrollTop = messages.scrollHeight;

            const aiAnswer = await askAI(text);
            loading.remove();
            if (aiAnswer) {
                botAnswer = aiAnswer;
            } else {
                botAnswer = "😕 Не удалось подключиться к нейросети. Попробуй написать 'помощь' или используй конструктор вопросов (кнопка 📋). Или напиши на почту fedorkosivtsov@yandex.ru.";
            }
        }
        addBotMessage(botAnswer);
    }

    if (sendBtn) sendBtn.addEventListener("click", sendMessage);
    if (input) input.addEventListener("keypress", e => { if (e.key === "Enter") sendMessage(); });

    // Добавляем кнопку открытия конструктора в окно чата
    const chatWindow = document.querySelector(".chat-window");
    if (chatWindow && !document.getElementById("open-builder-btn")) {
        const openBuilderBtn = document.createElement("button");
        openBuilderBtn.id = "open-builder-btn";
        openBuilderBtn.textContent = "📋";
        openBuilderBtn.style.position = "absolute";
        openBuilderBtn.style.bottom = "70px";
        openBuilderBtn.style.right = "10px";
        openBuilderBtn.style.background = "linear-gradient(135deg, #4cc9f0, #4361ee)";
        openBuilderBtn.style.border = "none";
        openBuilderBtn.style.borderRadius = "50%";
        openBuilderBtn.style.width = "40px";
        openBuilderBtn.style.height = "40px";
        openBuilderBtn.style.cursor = "pointer";
        openBuilderBtn.style.zIndex = "9999";
        openBuilderBtn.style.boxShadow = "0 2px 8px rgba(0,0,0,0.3)";
        chatWindow.appendChild(openBuilderBtn);
        openBuilderBtn.addEventListener("click", () => {
            if (builder) builder.style.display = "flex";
        });
    }

    // ==================== ПЕСОЧНИЦА ====================
    const htmlEditor = document.getElementById("html-code");
    const cssEditor = document.getElementById("css-code");
    const jsEditor = document.getElementById("js-code");
    const runBtn = document.getElementById("run-code");
    const resetBtn = document.getElementById("reset-code");
    const saveBtn = document.getElementById("save-project");
    const previewFrame = document.getElementById("preview-frame");

    if (runBtn) {
        runBtn.addEventListener("click", () => {
            if (previewFrame && htmlEditor && cssEditor && jsEditor) {
                previewFrame.srcdoc = htmlEditor.value + `<style>${cssEditor.value}</style><script>${jsEditor.value}<\/script>`;
            }
        });
    }
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            if (htmlEditor) htmlEditor.value = "";
            if (cssEditor) cssEditor.value = "";
            if (jsEditor) jsEditor.value = "";
            if (previewFrame) previewFrame.srcdoc = "";
        });
    }
    if (saveBtn) {
        saveBtn.addEventListener("click", () => {
            if (htmlEditor && cssEditor && jsEditor) {
                localStorage.setItem("playground_html", htmlEditor.value);
                localStorage.setItem("playground_css", cssEditor.value);
                localStorage.setItem("playground_js", jsEditor.value);
                alert("Проект сохранён! 🎉");
            }
        });
        if (localStorage.getItem("playground_html")) htmlEditor.value = localStorage.getItem("playground_html");
        if (localStorage.getItem("playground_css")) cssEditor.value = localStorage.getItem("playground_css");
        if (localStorage.getItem("playground_js")) jsEditor.value = localStorage.getItem("playground_js");
    }

    // Вкладки песочницы
    const editorTabs = document.querySelectorAll(".editor-tabs button");
    const codePanels = document.querySelectorAll(".code-panel");
    editorTabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = tab.dataset.tab;
            editorTabs.forEach(t => t.classList.remove("tab-active"));
            codePanels.forEach(p => p.classList.remove("active"));
            tab.classList.add("tab-active");
            const activePanel = document.querySelector(`.${target}-panel`);
            if (activePanel) activePanel.classList.add("active");
        });
    });

    // Цветовой пикер
    const colorPicker = document.getElementById("liveColorPicker");
    const colorBlock = document.getElementById("colorDemoBlock");
    const generatedCSS = document.getElementById("generatedCSS");
    if (colorPicker && colorBlock) {
        colorPicker.addEventListener("input", (e) => {
            const newColor = e.target.value;
            colorBlock.style.background = newColor;
            if (generatedCSS) generatedCSS.innerText = `background: ${newColor};`;
        });
    }

    // Анимация появления блоков
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

    updateProgress();
});
