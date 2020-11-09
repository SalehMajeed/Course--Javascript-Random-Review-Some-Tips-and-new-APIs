fetch('rankings.json')
.then(function (response) {
    return response.json()
}).then(function (obj) {
    console.log(obj)
}).catch(function (error) {
    console.log('Something went wrong with retrieving the people')
    console.log(error)
})