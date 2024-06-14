// 获取按钮和显示消息的DOM元素  
const greetButton = document.getElementById('greetButton');  
const greetingMessage = document.getElementById('greetingMessage');  
  
// 为按钮添加点击事件监听器  
greetButton.addEventListener('click', function() {  
    // 当按钮被点击时，显示问候消息  
    greetingMessage.textContent = '亲爱的老爸，祝您父亲节快乐！';  
});
