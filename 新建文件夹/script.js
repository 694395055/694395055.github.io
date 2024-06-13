function sendBlessing() {  
  var messageBox = document.getElementById('messageBox');  
  var blessingResult = document.getElementById('blessingResult');  
    
  if (messageBox.value) {  
    // 假设这里只是简单地显示祝福，而不是真的发送  
    blessingResult.textContent = '您已经发送了祝福: ' + messageBox.value;  
    // 清空消息框以便再次输入  
    messageBox.value = '';  
  } else {  
    blessingResult