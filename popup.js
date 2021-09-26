/*
 * @Author: your name
 * @Date: 2021-09-24 14:54:08
 * @LastEditTime: 2021-09-25 15:31:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /localProject/learnkzr/chrome/popup.js
 */
console.log('----', window.location.hostname)
if (window.location.hostname == 'blog.csdn.net') {
    document.querySelector('aside').innerHTML = "";
    document.querySelector('#rightAside').innerHTML = "";
    document.querySelector('.csdn-side-toolbar').innerHTML = "";
    console.log('第一个插件--------')
} else { 
    console.log('-------------------知乎-----------------',window)
    setTimeout(() => {
        $('button.Button.Modal-closeButton.Button--plain').click();
    }, 1000);
}
