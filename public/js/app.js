let username

let socket = io()

do {
    username = prompt('Enter your name : ')
} while (!username)

const textarea = document.querySelectorAll('#textarea')
const submitBtn = document.querySelectorAll('#submitBtn')

const commentBox = document.querySelectorAll('.comment__box')


submitBtn.addEventListner('click', (e) => {
    e.preventDefault()
    let comment = textarea.value


    if (!comment) {
        return
    }

    postComment(comment)
});

function postComment(comment) {
    // Append to dom
    let data = {
        username: username,
        comment: comment
    }

    appendToDom(data)
    textarea.value = ''


    //Broadcast
    broadcastComment(data)


    //Sync with MongoDB
}

function appendToDom(data) {

    let lTag = document.createElement('li')

    lTag.classList.add('comment', 'mb-3')
    
    let markup = `
                        <div class="card border-light mb-3">
                            <div class="card-body">
                                <h6>${data.username}</h6>
                                <p>${data.comment}</p>
                                <div>
                                    <img src="/img/clock.png" alt="clock">
                                    <small>${moment(data.time).format('LT')}</small>
                                </div>
                            </div>
                        </div>
    `

    lTag.innerHTML = markup

    commentBox.prepend(lTag)
    
}

function broadcastComment(data) {
    //Socket

}
