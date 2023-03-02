function checkString(str, obj) {
    return (str in obj)
}

// проверка:
// const ob = {мама: "Оля", сестра: "Инна"}
// console.log(checkString("дочь", ob))