function KeyOutput(obj) {
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(key, obj[key]);
            console.log(key);
        }
    }
}

