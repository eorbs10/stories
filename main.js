// 파일명이 'rabbit.js'인지 'robbit.js'인지 반드시 확인하세요!
import { initRabbit } from './stories/rabbit.js'; 
import { initSun } from './stories/sun.js';

// 브라우저의 HTML 요소(onclick)에서 접근할 수 있도록 window 객체에 등록합니다.
window.startStory = function(id) {
    const mainMenu = document.getElementById('main-menu');
    const storyPage = document.getElementById('story-page');

    if (mainMenu && storyPage) {
        mainMenu.classList.add('hidden');
        storyPage.classList.remove('hidden');
    }

    if (id === 'rabbit') {
        initRabbit();
    } else if (id === 'sun') {
        initSun();
    }
};