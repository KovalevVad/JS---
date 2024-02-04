/* fetch('https://reqres.in/api/users?per_page=12')
  .then(response => response.json())
  .then(function(users){
    console.log(users)
    for (let i = 0; i < 12; i++){
      console.log(users.data[i].last_name)
    }
  }) */


async function app() {
  const response = await fetch('https://reqres.in/api/users?per_page=12')
  const users = await response.json()

  console.log('-----------')
  console.log('Пункт №1:')
  for (let i = 0; i < 12; i++) {
    console.log(users.data[i].last_name)
  }

  console.log('-----------')
  console.log('Пункт №2:')
  for (let i = 0; i < 12; i++) {
    if (users.data[i].last_name[0] === 'F') {
      console.log(users.data[i])
    }
  }

  console.log('-----------')
  console.log('Пункт №3:')
  console.log(' Наша база содержит данные следующих пользователей:')
  const arrayUser = users.data
  const result = arrayUser.reduce((acc,el) => {
    acc.push(el.first_name + ' ' + el.last_name)
    return acc
  },[])
  result.forEach(item => console.log(item))

  console.log('-----------')
  console.log('Пункт №4:')
  const resultKeys = Object.keys(users.data[0]).forEach(item => console.log(item))
}
app()
