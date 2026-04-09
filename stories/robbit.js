export function initRabbit() {
    const title = document.getElementById('story-title');
    const text = document.getElementById('story-text');
    const interArea = document.getElementById('interaction-area');
    const choiceArea = document.getElementById('choice-area');

    title.innerText = "토끼와 거북이";
    text.innerText = "토끼가 길가에서 낮잠을 자고 있어요. 깨울까요?";

    // 토끼 전용 아이템(당근) 추가
    interArea.innerHTML = '<span id="item-carrot" style="font-size:50px; cursor:pointer;">🥕</span>';
    
    document.getElementById('item-carrot').onclick = () => {
        alert("당근을 먹으니 토끼가 기운이 납니다!");
        text.innerText = "토끼가 번쩍 눈을 뜨고 다시 달리기 시작합니다!";
    };

    // 선택지 버튼들
    choiceArea.innerHTML = `
        <button class="btn-choice" onclick="alert('거북이가 추월했습니다!')">계속 자게 두기</button>
        <button class="btn-choice" onclick="alert('토끼가 다시 1등으로 달려갑니다!')">강제로 깨우기</button>
    `;
}