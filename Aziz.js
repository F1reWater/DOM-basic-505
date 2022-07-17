let main = document.querySelector('.main') 
let first = document.querySelector('.first')
let second = document.querySelector('.second')
let spanski = document.querySelector('.spanski-inside')
let i = 0

let arr = [1 , 2 , 3 , 4 , 5 , 6 , 7]

first.onclick = () => {
    i = 0
    spanski.innerHTML = i
    main.innerHTML = ''
    arr.splice(5 , 2)
    for(let item of arr) {
        let mainInside = document.createElement('div')
        let forImg = document.createElement('div')
        let img = document.createElement('div')
        let forText = document.createElement('div')
        let Ftext = document.createElement('span')
        let Stext = document.createElement('span')
        let button = document.createElement('button')
        
        mainInside.classList.add('main-inside')
        forImg.classList.add('for-img')
        img.classList.add('img')
        forText.classList.add('for-text')
        Ftext.classList.add('Ftext')
        Stext.classList.add('Stext')
        button.classList.add('btn')
        
        Ftext.innerHTML = 'MEN’S CLOTHING (120)'
        Stext.innerHTML = 'Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in the padded sleeve, your everyday'
        button.innerHTML = 'В избранное'
        
        main.append(mainInside)
        mainInside.append(forImg)
        forImg.append(img)
        mainInside.append(forText)
        forText.append(Ftext)
        forText.append(Stext)
        forText.append(button)
        button.onclick = () => {
            if(button.innerHTML === 'В избранное') {
                button.innerHTML = 'Добавлено'
                i++
                spanski.innerHTML = i
            } else if(button.innerHTML === 'Добавлено'){
                button.innerHTML = 'В избранное'
                        i--
                        spanski.innerHTML = i
            }
        }
        } 
}

second.onclick = () => {
    i = 0
    spanski.innerHTML = i
    main.innerHTML = ''
    arr = [1 , 2 , 3 , 4 , 5 , 6 , 7]
    for(let item of arr) {
        let mainInside = document.createElement('div')
        let forImg = document.createElement('div')
        let img = document.createElement('div')
        let forText = document.createElement('div')
        let Ftext = document.createElement('span')
        let Stext = document.createElement('span')
        let button = document.createElement('button')
        
        mainInside.classList.add('main-inside')
        forImg.classList.add('for-img')
        img.classList.add('img')
        forText.classList.add('for-text')
        Ftext.classList.add('Ftext')
        Stext.classList.add('Stext')
        button.classList.add('btn')
        
        Ftext.innerHTML = 'MEN’S CLOTHING (120)'
        Stext.innerHTML = 'Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in the padded sleeve, your everyday'
        button.innerHTML = 'В избранное'
        
        main.append(mainInside)
        mainInside.append(forImg)
        forImg.append(img)
        mainInside.append(forText)
        forText.append(Ftext)
        forText.append(Stext)
        forText.append(button)
        button.onclick = () => {
            if(button.innerHTML === 'В избранное') {
                button.innerHTML = 'Добавлено'
                i++
                spanski.innerHTML = i
            } else if(button.innerHTML === 'Добавлено'){
                button.innerHTML = 'В избранное'
                        i--
                        spanski.innerHTML = i
            }
        }
        } 
}
for(let item of arr) {
    let mainInside = document.createElement('div')
    let forImg = document.createElement('div')
    let img = document.createElement('div')
    let forText = document.createElement('div')
    let Ftext = document.createElement('span')
    let Stext = document.createElement('span')
    let button = document.createElement('button')
    
    mainInside.classList.add('main-inside')
    forImg.classList.add('for-img')
    img.classList.add('img')
    forText.classList.add('for-text')
    Ftext.classList.add('Ftext')
    Stext.classList.add('Stext')
    button.classList.add('btn')
    
    Ftext.innerHTML = 'MEN’S CLOTHING (120)'
    Stext.innerHTML = 'Your perfect pack for everyday use and walks <br> in the forest. Stash your laptop (up to 15 <br> inches) in the padded sleeve, your everyday'
    button.innerHTML = 'В избранное'
    
    main.append(mainInside)
    mainInside.append(forImg)
    forImg.append(img)
    mainInside.append(forText)
    forText.append(Ftext)
    forText.append(Stext)
    forText.append(button)

    button.onclick = () => {
        if(button.innerHTML === 'В избранное') {
            button.innerHTML = 'Добавлено'
            i++
            spanski.innerHTML = i
        } else if(button.innerHTML === 'Добавлено'){
            button.innerHTML = 'В избранное'
                    i--
                    spanski.innerHTML = i
        }
    }
    }