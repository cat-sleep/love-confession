// 等待DOM完全加载后再执行JavaScript代码
document.addEventListener('DOMContentLoaded', function () {
    // 随机浪漫话语数组
    const romanticMessages = [
        "我们可以先从朋友做起，慢慢培养感情～",
        "你要不要再好好想想？我真的很喜欢你！",
        "给我一个机会证明我的真心好吗？",
        "我保证会好好珍惜你，让你成为世界上最幸福的人！",
        "你知道吗？你的每一个微笑都让我心动不已～",
        "我们可以试试看，也许会有意想不到的惊喜呢！",
        "你是我遇到的最特别的人，真的不考虑一下吗？",
        "我会用我的一生来证明，选择我是你最正确的决定！",
        "没有你，我的世界就失去了色彩...",
        "让我们一起创造属于我们的浪漫故事吧！"
    ];

    // 点击统计
    let yesCount = 0;
    let noCount = 0;
    let chances = 5; // 剩余机会次数

    // 登录验证
    function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '幼稚的笨蛋' && password === '5201314') {
            document.getElementById('loginContainer').style.display = 'none';
            document.getElementById('mainContainer').style.display = 'block';
            initializeEffects();
            // 发送登录成功通知
            sendNotification('登录成功', '用户已成功登录表白页面');
        } else {
            alert('用户名或密码错误！');
        }
    }

    // 为登录按钮添加点击事件监听器
    document.querySelector('.login-form button').addEventListener('click', login);

    // 初始化特效
    function initializeEffects() {
        // 创建星星
        setInterval(() => {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * window.innerWidth + 'px';
            star.style.top = '0';
            star.style.animationDuration = Math.random() * 2 + 1 + 's';
            document.body.appendChild(star);
            setTimeout(() => star.remove(), 3000);
        }, 300);

        // 创建雪花
        setInterval(() => {
            const snowflake = document.createElement('div');
            snowflake.className = 'snowflake';
            snowflake.innerHTML = '❄';
            snowflake.style.left = Math.random() * window.innerWidth + 'px';
            snowflake.style.animationDuration = Math.random() * 3 + 2 + 's';
            document.body.appendChild(snowflake);
            setTimeout(() => snowflake.remove(), 5000);
        }, 200);
    }

    // 发送桌面通知
    function sendNotification(title, message) {
        if (!('Notification' in window)) {
            alert('此浏览器不支持通知功能');
            return;
        }

        // 如果已经有权限，直接发送通知
        if (Notification.permission === 'granted') {
            new Notification(title, {
                body: message,
                icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="%23ff1493" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
                badge: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" fill="%23ff1493"/></svg>'
            });
            return;
        }

        // 如果没有权限，请求权限
        Notification.requestPermission().then(function (permission) {
            if (permission === 'granted') {
                new Notification(title, {
                    body: message,
                    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="%23ff1493" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>',
                    badge: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><circle cx="12" cy="12" r="10" fill="%23ff1493"/></svg>'
                });
            } else {
                alert('为了更好的体验，建议允许通知权限');
            }
        });
    }

    // 获取按钮元素
    const animeContainer = document.querySelector('.anime-container');
    const singleCharacter = document.createElement('div');
    singleCharacter.className = 'anime-character single-character';
    const coupleCharacter = document.createElement('div');
    coupleCharacter.className = 'anime-character couple-character';
    animeContainer.appendChild(singleCharacter);
    animeContainer.appendChild(coupleCharacter);

    const noBtn = document.querySelector('.btn-no');
    const yesBtn = document.querySelector('.btn-yes');

    // 同意按钮点击事件
    yesBtn.addEventListener('click', function () {
        yesCount++;
        const message = document.querySelector('.message');
        message.style.transform = 'scale(0)';
        message.style.opacity = '0';

        setTimeout(() => {
            message.textContent = '谢谢你选择我！❤';
            message.style.transform = 'scale(1)';
            message.style.opacity = '1';
        }, 300);

        this.style.backgroundColor = '#ff69b4';
        this.style.transform = 'scale(1.1)';
        noBtn.style.opacity = '0';
        noBtn.style.transform = 'scale(0)';

        setTimeout(() => {
            noBtn.style.display = 'none';
            singleCharacter.style.display = 'none';
            coupleCharacter.style.display = 'block';
        }, 500);

        // 添加心形填充效果
        const heart = document.querySelector('.heart');
        heart.classList.add('heart-filled');

        // 发送结果通知和保存结果
        const resultMessage = `表白成功！\n同意次数: ${yesCount}\n拒绝次数: ${noCount}`;
        sendNotification('恭喜！', resultMessage);

        // 保存结果到本地存储
        const results = JSON.parse(localStorage.getItem('confessionResults') || '[]');
        results.push({
            username: document.getElementById('username').value,
            yesCount,
            noCount,
            finalResult: '成功',
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('confessionResults', JSON.stringify(results));
    });

    // 拒绝按钮点击事件
    noBtn.addEventListener('click', function () {
        noCount++;
        chances--;
        const chancesEl = document.querySelector('.chances');
        chancesEl.style.animation = 'shake 0.5s ease';
        chancesEl.textContent = `剩余机会：${chances}次`;
        setTimeout(() => chancesEl.style.animation = '', 500);

        if (chances === 0) {
            const elements = document.querySelectorAll('.heart, .message, .chances, .btn, .anime-container, .star, .snowflake');
            elements.forEach(el => {
                el.style.setProperty('--fall-rotate', `${Math.random() * 720 - 360}deg`);
                el.classList.add('falling');
                el.style.animation = 'fallDown 2s cubic-bezier(0.4, 0, 0.2, 1) forwards';
            });
            setTimeout(() => {
                window.close();
            }, 2000);
            return;
        }

        const maxX = window.innerWidth - this.offsetWidth;
        const maxY = window.innerHeight - this.offsetHeight;
        this.style.position = 'absolute';
        this.style.left = Math.random() * maxX + 'px';
        this.style.top = Math.random() * maxY + 'px';

        // 添加心碎效果
        const heart = document.querySelector('.heart');
        heart.classList.add('heart-broken');
        setTimeout(() => {
            heart.classList.remove('heart-broken');
        }, 1000);

        // 更新消息
        document.querySelector('.message').textContent = romanticMessages[Math.floor(Math.random() * romanticMessages.length)];
    });
});