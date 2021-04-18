function backDate(){
    let today = new Date()
    let yesterday = new Date(today)
    
    yesterday.setDate(yesterday.getDate() - 0)
    let backDate = yesterday.toLocaleDateString()
    return backDate
}

module.exports = backDate