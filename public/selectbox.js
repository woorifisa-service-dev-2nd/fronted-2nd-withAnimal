// /* 화살표 함수 */
// const label = document.querySelector('.label');
// const options = document.querySelectorAll('.optionItem');

// // 클릭한 옵션의 텍스트를 라벨 안에 넣음
// const handleSelect = (item) => {
//   label.parentNode.classList.remove('active');
//   label.innerHTML = item.textContent;
// }
// // 옵션 클릭시 클릭한 옵션을 넘김
// options.forEach(option => {
// 	option.addEventListener('click', () => handleSelect(option))
// })

// // 라벨을 클릭시 옵션 목록이 열림/닫힘
// label.addEventListener('click', () => {
//   if(label.parentNode.classList.contains('active')) {
//   	label.parentNode.classList.remove('active');
//   } else {
//   	label.parentNode.classList.add('active');
//   }
// })


const label = document.querySelector('.label');
const options = document.querySelectorAll('.optionItem');
const handleSelect = function(item) {
  label.innerHTML = item.textContent;
  label.parentNode.classList.remove('active');
}
options.forEach(function(option){
  option.addEventListener('click', function(){handleSelect(option)})
})

label.addEventListener('click', function(){
  if(label.parentNode.classList.contains('active')) {
    label.parentNode.classList.remove('active');
  } else {
    label.parentNode.classList.add('active');
  }
});