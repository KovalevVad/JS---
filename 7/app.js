let chapters = document.querySelectorAll('ul')
let arraysOfLi = []

chapters.forEach(function(ul) {
  let liArray = Array.from(ul.querySelectorAll('li'))
  arraysOfLi.push(liArray)
})

for (let i = 0; i < arraysOfLi.length; i++) {
  let ul = arraysOfLi[i]
  let ul1 = ul.slice(0, 2)
  let ul2 = ul.slice(2, ul.length)

  ul2.sort(function(a, b) {
    let textA = a.textContent.trim().toUpperCase()
    let textB = b.textContent.trim().toUpperCase()
    return (textA > textB) ? 1 : -1
  })

  arraysOfLi[i] = [...ul1, ...ul2];
}


for (let i = 0; i < chapters.length; i++) {
  for (let j = 0; j < arraysOfLi[i].length; j++) {
    chapters[i].appendChild(arraysOfLi[i][j])
  }
}




