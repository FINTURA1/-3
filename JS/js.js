const texts = [
    "C днём рождения!!!",
    "Ну типа я поздравляю тебя",
    "И желаю тебе там счастья",
    "А еще любви и здоровья тоже",
    "И чтобы твоя собака меня полюбила",
    "Чтоб небо было голубое",
    "Трава зелёная а жизнь вообще...",
    "классная, типа прикольная чтоли",
    "Не плохая короче",
    "А вообще, ты секс",
    "И я был бы уродом",
    "Полностью покрытым стыдом",
    "Если бы тебе ничего не подарил",
    "Ну короче да",
    "Мне стыдно"
]

let index = 0

const stikers = [
    document.querySelector(".stiker1"),
    document.querySelector(".stiker2"),
    document.querySelector(".stiker3"),
    document.querySelector(".stiker4"),
    document.querySelector(".stiker5"),
    document.querySelector(".stiker6"),
    document.querySelector(".stiker7"),
    document.querySelector(".stiker8"),
    document.querySelector(".stiker9"),
    document.querySelector(".stiker10"),
    document.querySelector(".stiker11"),
    document.querySelector(".stiker12"),
    document.querySelector(".stiker13"),
    document.querySelector(".stiker14"),
    document.querySelector(".stiker15"),
    document.querySelector(".stiker16"),
]


document.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
        const div = document.querySelector(".remove")
        div.remove()

        const old = document.querySelector(".old")

        if (index < texts.length) {
            const newDiv = document.createElement("div")
            newDiv.classList.add("remove")

            const newH1 = document.createElement("h1")
            newH1.textContent = texts[index]

            const newButton = document.createElement("button")
            if (index === 14) {
                newButton.textContent = "конец"
            } else {
                newButton.textContent = "Далее"
            }

            newDiv.appendChild(newH1)
            newDiv.appendChild(newButton)

            document.querySelector("main").appendChild(newDiv)

            index++

        }
    }
})
document.addEventListener("click", e => {
    const old = document.querySelector(".old")
    if (old) {
        old.style.opacity = 0;
        old.classList.remove("old")
    }

    for (let i = 0; i < stikers.length; i++) {
        if (i === index) {
            stikers[i].style.opacity = 1
            stikers[i].classList.add("old")
        }
    }
})
