window.onload = function () {
    document.getElementById('submit_login_btn').addEventListener('click', upload);
    
};


function upload() {
    // req.setRequestHeader('Authorization', 'Basic [base64 encoded password here]' );
    const xhr = new XMLHttpRequest();
    const name = document.getElementById('name_login_input').value;
    const password = document.getElementById('password_login_input').value;
    const jsonObject = {user: name, password: password}
    console.log(JSON.stringify(jsonObject))

    xhr.open('POST', 'https://job-manager-xb5oq.ondigitalocean.app/auth/login', true);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8')

    xhr.onload = () => {
        const xhr2 = new XMLHttpRequest();
        xhr2.open('GET', 'https://job-manager-xb5oq.ondigitalocean.app/auth/check-auth', true);
        
        xhr2.setRequestHeader('Authorization', JSON.parse(xhr.response).accessToken);
        xhr2.onload = () => {
            console.log(xhr2.responseText);
        }        
        xhr2.send();
    };
    xhr.send(JSON.stringify(jsonObject));
}