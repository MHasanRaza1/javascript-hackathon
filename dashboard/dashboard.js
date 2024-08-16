import { auth, onAuthStateChanged, signOut,db,set,ref,get,remove } from '../firebase.js';

let logoutBtn = document.getElementById('logout-btn');
let postBtn = document.getElementById('post-btn');
let title = document.getElementById('title');
let postContent = document.getElementById('post-content');
let notify = document.querySelector('.notify');

const logout = (event) => {
  event.preventDefault()
  signOut(auth).then(() => {
    Toastify({
      text: "Logout Successfully",
      duration: 3000
    }).showToast();
  })
}

logoutBtn.addEventListener('click', logout);


onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = '../login/login.html'
  }
});

function addPost() {
  event.preventDefault();
  const id = Math.floor(Math.random() * 100)

  set(ref(db, 'post/' + id), {
    title: title.value,
    postContent: postContent.value
  })
  notify.innerHTML = "data Added"
  title.value = "";
  postContent.value = "";

  GetPostData()
}


postBtn.addEventListener('click', addPost)

// Get Data from firebase Db

function GetPostData() {
  const user_ref = ref(db, 'post/')
  get(user_ref).then((snapshot) => {
    const data = snapshot.val()

    let html = "";
    const table = document.querySelector('table')
    for (const key in data) {
      const { title, postContent } = data[key]

      html += `
               <tr>
                    <td> <span class="postNumber"></span></td>
                    <td>${title} </td>
                    <td>${postContent} </td>
                    <td> <button class="delete" onclick="deleteData(${key})">Delete</button> </td>
                    <td> <button class="update" onclick="updateData(${key})">Update</button> </td>
               </tr>
              `
    }

    table.innerHTML = html;
    notify.innerHTML = '';
  })
}

GetPostData()

window.deleteData = function(key){
  remove(ref(db,`post/${key}`));
  notify.innerHTML = 'Data Deleted';
  GetPostData();
}