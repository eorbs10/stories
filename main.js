// stories 폴더 안의 파일들에서 함수를 가져옵니다.
import { initRabbit } from './stories/rabbit.js';
import { initSun } from './stories/sun.js';

// 브라우저가 startStory 함수를 찾을 수 있게 전역(window)에 등록합니다.
window.startStory = function(id) {
    document.getElementById('main-menu').classList.add('hidden');
    document.getElementById('story-page').classList.remove('hidden');

    if (id === 'rabbit') {
        initRabbit();
    } else if (id === 'sun') {
        initSun();
    }
};