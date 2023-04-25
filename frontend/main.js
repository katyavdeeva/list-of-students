const SERVER_URL = 'http://localhost:3000'

async function serverAddStudent(obj) {
  let response = await fetch(SERVER_URL + '/api/students', {
    method: "POST",
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(obj),
  })
  let data = await response.json()
  return data
};

async function serverGetStudent() {
  let response = await fetch(SERVER_URL + '/api/students', {
    method: "GET",
    headers: { 'Content-Type': 'application/json' }
  })
  let data = await response.json()
  return data
};

async function serverDelStudent(id) {
  let response = await fetch(SERVER_URL + '/api/students/' + id, {
    method: "DELETE",
})

let data = await response.json()

return data
};


//База данных

// let listDATA = [
//   {
//     name: 'Екатерина',
//     surname: 'Авдеева',
//     lastname: 'Павловна',
//     birthday: new Date(1991, 0, 10),
//     studyStart: 2007,
//     faculty: 'строительный',
//   },
//   {
//     name: 'Ольга',
//     surname: 'Ключникова',
//     lastname: 'Александровна',
//     birthday: new Date(1995, 10, 27),
//     studyStart: 2020,
//     faculty: 'строительный',
//   },
//   {
//     name: 'Александр',
//     surname: 'Хисматуллин',
//     lastname: 'Шамильевич',
//     birthday: new Date(2001, 01, 16),
//     studyStart: 2021,
//     faculty: 'дизайн',
//   },
//   {
//     name: 'Алексей',
//     surname: 'Косотуров',
//     lastname: 'Николаевич',
//     birthday: new Date(1988, 03, 01),
//     studyStart: 2022,
//     faculty: 'экономический',
//   },
//   {
//     name: 'Алиса',
//     surname: 'Алиева',
//     lastname: 'Альбертовна',
//     birthday: new Date(1989, 04, 10),
//     studyStart: 2019,
//     faculty: 'астрономии',
//   },
// ]

let serverData = await serverGetStudent()

let listDATA = []

if (serverData) {
  listDATA = serverData
}

//Создание элементов
let sortColumFlag = 'FIO',
  sortDirFlag = true

const contain = document.querySelector('.container'),
  $form = document.createElement('form'),
  $filterForm = document.createElement('form'),
  $app = document.getElementById('app'),
  $table = document.createElement('table'),
  $tableHead = document.createElement('thead'),
  $tableBody = document.createElement('tbody'),

  $inputName = document.createElement('input'),
  $inputSurName = document.createElement('input'),
  $inputLastName = document.createElement('input'),
  $inputFaculty = document.createElement('input'),
  $inputBirthDate = document.createElement('input'),
  $inputStartYear = document.createElement('input'),
  $button = document.createElement('button'),

  $filterFio = document.createElement('input'),
  $filterFaculty = document.createElement('input'),
  $filterStartYear = document.createElement('input'),
  $filterFinishDate = document.createElement('input'),
  $title = document.createElement('h1'),
  $title2 = document.createElement('h2'),


  $tableHeadTr = document.createElement('tr'),
  $tableHeadFIO = document.createElement('th'),
  $tableHeadFaculty = document.createElement('th'),
  $tableHeadBirthDate = document.createElement('th'),
  $tableHeadYearStudy = document.createElement('th'),
  $tableHeadDeleet = document.createElement('th')

$title.textContent = 'Список студентов'
$title2.textContent = 'Фильтр списка студентов'
$table.classList.add('table', 'table-light')
$tableHeadTr.classList.add('table-success')
$form.classList.add('form', 'mb-3')
$form.action = '#'
$inputName.classList.add('form-control', 'mb-3')
$inputName.type = 'text'
$inputName.placeholder = 'Ведите имя'
$inputSurName.classList.add('form-control', 'mb-3')
$inputSurName.type = 'text'
$inputSurName.placeholder = 'Ведите фамилию'
$inputLastName.classList.add('form-control', 'mb-3')
$inputLastName.type = 'text'
$inputLastName.placeholder = 'Ведите отчество'
$inputFaculty.classList.add('form-control', 'mb-3')
$inputFaculty.type = 'text'
$inputFaculty.placeholder = 'Ведите факультет'
$inputBirthDate.classList.add('form-control', 'mb-3')
$inputBirthDate.type = 'date'
$inputBirthDate.min = '1900-01-01'
$inputBirthDate.max = '2023-11-31'
$inputStartYear.classList.add('form-control', 'mb-3')
$inputStartYear.placeholder = 'Год поступления'
$inputStartYear.type = 'number'
$inputStartYear.min = '2000'
$inputStartYear.max = '2023'
$button.classList.add('btn', 'btn-outline-success')
$button.type = 'submit'
$button.textContent = 'Добавить пользователя'

$filterForm.classList.add('form', 'mb-3')
$filterForm.action = '#'
$filterFio.classList.add('form-control-lg', 'me-3')
$filterFio.type = 'text'
$filterFio.placeholder = 'ФИО'
$filterFaculty.classList.add('form-control-lg', 'me-3')
$filterFaculty.type = 'text'
$filterFaculty.placeholder = 'Факультет'
$filterStartYear.classList.add('form-control-lg', 'me-3')
$filterStartYear.placeholder = 'Год поступления'
$filterStartYear.type = 'number'
$filterFinishDate.classList.add('form-control-lg')
$filterFinishDate.placeholder = 'Год окончания'
$filterFinishDate.type = 'number'



$tableHeadFIO.textContent = 'ФИО',
  $tableHeadFaculty.textContent = 'Факультет',
  $tableHeadBirthDate.textContent = 'Дата рождения',
  $tableHeadYearStudy.textContent = 'Годы обучения',


  $tableHeadTr.append($tableHeadFIO)
$tableHeadTr.append($tableHeadFaculty)
$tableHeadTr.append($tableHeadBirthDate)
$tableHeadTr.append($tableHeadYearStudy)
$tableHeadTr.append($tableHeadDeleet)


contain.prepend($filterForm)
$filterForm.append($title2)
$filterForm.append($filterFio)
$filterForm.append($filterFaculty)
$filterForm.append($filterStartYear)
$filterForm.append($filterFinishDate)


contain.prepend($form)
$form.append($inputName)
$form.append($inputSurName)
$form.append($inputLastName)
$form.append($inputFaculty)
$form.append($inputBirthDate)
$form.append($inputStartYear)
$form.append($button)

contain.prepend($title)

$tableHead.append($tableHeadTr)
$table.append($tableHead)
$table.append($tableBody)
$app.append($table)

function createUserTr(oneUser) {
  const $userTr = document.createElement('tr'),
    $userThFIO = document.createElement('th'),
    $userThFaculty = document.createElement('th'),
    $userThBirthDate = document.createElement('th'),
    $userThStartYear = document.createElement('th'),
    $tableHeadDel = document.createElement('th'),

    btnDel = document.createElement('button')
  $tableHeadDel.append(btnDel)

  btnDel.addEventListener('click', async function () {
    await serverDelStudent(oneUser.id)
    $userTr.remove()
  })

  $userThFIO.textContent = oneUser.FIO,
    $userThFaculty.textContent = oneUser.faculty,
    $userThBirthDate.textContent = oneUser.bday,
    $userThStartYear.textContent = oneUser.tableHeadYearStudy,
    btnDel.textContent = 'Удалить'
  btnDel.classList.add('btn', 'btn-danger', 'w-100')

  $userTr.append($userThFIO)
  $userTr.append($userThFaculty)
  $userTr.append($userThBirthDate)
  $userTr.append($userThStartYear)
  $userTr.append($tableHeadDel)
  return $userTr
}

// Фильтрация
function filter(arr, prop, value) {
  return arr = arr.filter(function (oneUser) {
    if (oneUser[prop].toLowerCase().includes(value.trim())) return true
  })
}
// Преобразование даты
function getDate(date) {
  let result = date.getDate() < 10 ? '0' + date.getDate() + '.' : date.getDate() + '.'
  result = result + (date.getMonth() < 9 ? '0' + (date.getMonth() + 1) + '.' : (date.getMonth() + 1) + '.')
  result = result + date.getFullYear()
  let now = new Date()
  let age = now.getFullYear() - date.getFullYear()
  now.getMonth() < date.getMonth() ? age = age - 1 : age
  result = result + ' ' + `(${age} лет)`
  return result
}

// Рендер

function render(arrData) {
  $tableBody.innerHTML = '';
  let today = new Date()
  let copyListData = [...arrData]

  // Подготовка

  for (const oneUser of copyListData) {
    oneUser.FIO = oneUser.surname + ' ' + oneUser.name + ' ' + oneUser.lastname
    oneUser.bday = getDate(new Date(oneUser.birthday))
    let course = today.getFullYear() - oneUser.studyStart
    course > 4 && today.getMonth(8) ? course = '(закончил)' : course = `(${course} курс)`
    oneUser.tableHeadYearStudy = oneUser.studyStart + '-' + (parseInt(oneUser.studyStart) + 4) + ' ' + course
  }


  // Сортировка
  copyListData = copyListData.sort(function (a, b) {
    let sort = a[sortColumFlag] < b[sortColumFlag]
    if (sortDirFlag == false) sort = a[sortColumFlag] > b[sortColumFlag]
    if (sort) return -1
  })

  // Фильтрация
  if ($filterFio.value.trim() !== '') {
    copyListData = filter(copyListData, 'FIO', $filterFio.value)
  }

  if ($filterFaculty.value.trim() !== '') {
    copyListData = filter(copyListData, 'faculty', $filterFaculty.value)
  }

  if ($filterStartYear.value.trim() !== '') {
    copyListData = copyListData.filter(function (oneUser) {
      if (oneUser.studyStart == $filterStartYear.value.trim()) return true
    })
  }

  if ($filterFinishDate.value.trim() !== '') {
    copyListData = copyListData.filter(function (oneUser) {
      if (oneUser.studyStart + 4 == $filterFinishDate.value.trim()) return true
    })
  }



  // Отрисовка

  for (const oneUser of copyListData) {
    const newTr = createUserTr(oneUser)
    $tableBody.append(newTr)
  }
}
render(listDATA)

// Добавление
$form.addEventListener('submit', async function (event) {
  event.preventDefault()
  // Валидация
  if ($inputName.value.trim() == '') {
    alert('Имя не введено')
    return
  }

  if ($inputSurName.value.trim() == '') {
    alert('Фамилия не введена')
    return
  }

  if ($inputLastName.value.trim() == '') {
    alert('Отчество не введено')
    return
  }

  if ($inputFaculty.value.trim() == '') {
    alert('Факультет не указан')
    return
  }

  if ($inputBirthDate.value.trim() == '') {
    alert('Дата рождения не указана')
    return
  }

  if ($inputStartYear.value.trim() == '') {
    alert('Год поступления не указан')
    return
  }

  let newStudent = {
    name: $inputName.value.trim(),
    surname: $inputSurName.value.trim(),
    lastname: $inputLastName.value.trim(),
    birthday: new Date($inputBirthDate.valueAsDate),
    studyStart: parseInt($inputStartYear.value.trim()),
    faculty: $inputFaculty.value.trim(),
  }

  let serverDataObj = await serverAddStudent(newStudent)
  serverDataObj.birthday = new Date(serverDataObj.birthday)


  listDATA.push(serverDataObj)
  event.target.reset()
  console.log(listDATA);
  render(listDATA)
})



// Клики сортировки

$tableHeadFIO.addEventListener('click', function () {
  sortColumFlag = 'FIO'
  sortDirFlag = !sortDirFlag
  render(listDATA)
})

$tableHeadFaculty.addEventListener('click', function () {
  sortColumFlag = 'faculty'
  sortDirFlag = !sortDirFlag
  render(listDATA)
})

$tableHeadBirthDate.addEventListener('click', function () {
  sortColumFlag = 'birthday'
  sortDirFlag = !sortDirFlag
  render(listDATA)
})

$tableHeadYearStudy.addEventListener('click', function () {
  sortColumFlag = 'studyStart'
  sortDirFlag = !sortDirFlag
  render(listDATA)
})

// Фильтр

$filterForm.addEventListener('submit', function (event) {
  event.preventDefault()
})

$filterFio.addEventListener('input', function () {
  render(listDATA)
})

$filterFaculty.addEventListener('input', function () {
  render(listDATA)
})

$filterStartYear.addEventListener('input', function () {
  render(listDATA)
})

$filterFinishDate.addEventListener('input', function () {
  render(listDATA)
})
