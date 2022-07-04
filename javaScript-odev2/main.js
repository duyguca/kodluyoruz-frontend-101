let toDoListArr = [
    '3 Litre Su İç',
    'Ödevleri Yap',
    'En Az 3 Saat Kodlama Yap',
    'Yemek Yap',
    '50 Sayfa Kitap Oku'
]

const toDoList = document.getElementById('list');
const toDoInput = document.getElementById('task');

function renderToDoList() {
    toDoListArr.forEach((elem, index) => {
        const toDoItem = document.createElement('li');
        toDoItem.classList.add('d-flex')
        toDoItem.classList.add('justify-content-between')
        toDoItem.classList.add('list-item')
        toDoItem.innerHTML = `${elem} <button type="button" data-index="${index}" class="btn btn-link close-btn">X</button>`
        toDoList.append(toDoItem)
    })
    addClickListenerCloseBtn() 
}
renderToDoList() 

function markDone() {
    const toDoItems = document.querySelectorAll('.list-item');

    toDoItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            item.classList.add('checked');
        })
    })
}
markDone()

function addClickListenerCloseBtn() {
    const closeBtns = document.querySelectorAll('.close-btn');
    closeBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            toDoListArr = toDoListArr.filter((elem, index) => index != btn.dataset.index)
            resetToDoList()
            renderToDoList()
            markDone()
        })
    })
}

function resetToDoList() {
    toDoList.innerHTML = '';
}

function newElement() {
    if(toDoInput.value != '') {
        toDoListArr.push(toDoInput.value);
        resetToDoList()
        renderToDoList()
        markDone()
        resetInput()
    }
}

function resetInput() {
    toDoInput.value = '';
}

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
const toastLiveError = document.getElementById('liveToastError')

if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    if(toDoInput.value === '') {
        const toast = new bootstrap.Toast(toastLiveError)
        toast.show()
    } else {
        const toast = new bootstrap.Toast(toastLiveExample)
        toast.show()
    }   
  })
}