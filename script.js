let teable = document.querySelector('table')

let items = [
    {
        text1: 'Переписать проект на Vue 3',
        text2: 'Quia et suscipitnsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: '21.10.21',
        time: '14:31',
        progress: 'Готово'
    },
    {
        text1: 'Переписать проект на Vue 3',
        text2: 'Quia et suscipitnsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: '21.10.21',
        time: '14:31',
        progress: 'Готово'
    },
    {
        text1: 'Переписать проект на Vue 3',
        text2: 'Quia et suscipitnsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        date: '21.10.21',
        time: '14:31',
        progress: 'Готово'
    }

]

const reload = (arr) => {
    for (let item of arr) {
        let tbody = document.createElement('tbody')
        let tr = document.createElement('tr')
        let firstText = document.createElement('th')
        let twoText = document.createElement('th')
        let date = document.createElement('th')
        let time = document.createElement('th')
        let progress = document.createElement('th')

        firstText.innerHTML = item.text1
        twoText.innerHTML = item.text2
        date.innerHTML = item.date
        time.innerHTML = item.time
        progress.innerHTML = item.progress

        tr.append(firstText, twoText, date, time, progress)
        tbody.append(tr)
        teable.append(tbody)
    }
}

reload(items)

let plitka = document.querySelector('.plitka')
let appends = document.querySelector('.appends')
let table = document.querySelector('.table')

const plitkas = (arr) => {
    for (let item of arr) {
        let itemm = document.createElement('div')
        let firstText = document.createElement('p')
        let twoText = document.createElement('p')
        let dateTime = document.createElement('div')
        let date = document.createElement('p')
        let time = document.createElement('p')
        let progress = document.createElement('p')

        itemm.classList.add('item')
        dateTime.classList.add('datetime')

        firstText.innerHTML = item.text1
        twoText.innerHTML = item.text2
        date.innerHTML = item.date
        time.innerHTML = item.time
        progress.innerHTML = item.progress

        itemm.append(firstText, twoText, dateTime, progress)
        dateTime.append(date, time)
        appends.append(itemm)
    }
}

plitka.onclick = () => {   
    plitkas(items)
}