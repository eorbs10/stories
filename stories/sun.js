export function initSun() {
    const title = document.getElementById('story-title');
    const text = document.getElementById('story-text');
    const interArea = document.getElementById('interaction-area');
    const choiceArea = document.getElementById('choice-area');

    title.innerText = "해와 달이 된 오누이";
    text.innerText = "호랑이가 떡을 하나 달라고 무섭게 소리칩니다!";

    // 해와 달 전용 아이템(떡) 추가
    interArea.innerHTML = '<span id="item-cake" style="font-size:50px; cursor:pointer;">🍡</span>';

    document.getElementById('item-cake').onclick = () => {
        alert("호랑이가 떡을 받아먹고 춤을 춥니다.");
        text.innerText = "호랑이가 배가 불러서 그냥 돌아갔어요! 해피엔딩?";
    };

    choiceArea.innerHTML = `
        <button class="btn-choice" onclick="alert('나무 위로 올라갔습니다!')">나무 위로 숨기</button>
        <button class="btn-choice" onclick="alert('하늘에 동아줄을 빌어봅니다.')">동아줄 요청하기</button>
    `;
}