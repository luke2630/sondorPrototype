//still figuring this out, although the plan is to eventually have the info written to a google sheet

/*function init() {
    Tabletop.init( {https://docs.google.com/spreadsheets/d/1LtNlcfAHZjUWQbqp59BLfSiu7zbk-0Yf-Fj7NIhrmb8/edit#gid=0
    callback: function(data, tabletop) {
    console.log(data)
    },
    simpleSheet: true } )
    }
    window.addEventListener(‘DOMContentLoaded’, init)
*/
//https://docs.google.com/spreadsheets/d/1LtNlcfAHZjUWQbqp59BLfSiu7zbk-0Yf-Fj7NIhrmb8/edit#gid=0

const scriptURL = 'https://script.google.com/macros/s/AKfycby5JJ5Wy6VslXSD13K55a4uXze-R-9mwKi9xy0p6OaKvp-xLXI/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('success', response))
    .catch(error => console.error('error', error.message))
})
