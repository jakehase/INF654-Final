import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

// Your web app's Firebase configuration
const firebaseConfig = {

    apiKey: "AIzaSyDfT_IXUWWsn3LuYuLAB1YoN00ORmWBTmE",
    authDomain: "portfolio-7c105.firebaseapp.com",
    projectId: "portfolio-7c105",
    storageBucket: "portfolio-7c105.appspot.com",
    messagingSenderId: "751382361893",
    appId: "1:751382361893:web:48b3a29fc4cfda1a628ccc",
    measurementId: "G-Y2TKL7CNLS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getTasks(db) {
  const tasksCol = collection(db, "tasks");
  const taskSnapshot = await getDocs(tasksCol);
  const taskList = taskSnapshot.docs.map((doc) => doc);
  return taskList;
}


const unsub = onSnapshot(collection(db, "tasks"), (doc) => {
  //   console.log(doc.docChanges());
  doc.docChanges().forEach((change) => {
    // console.log(change, change.doc.data(), change.doc.id);
    if (change.type === "added") {
      //Call render function in UI
      renderTask(change.doc.data(), change.doc.id);
    }
    if (change.type === "removed") {
      //do something
      removeTask(change.doc.id);
    }
  });
});

//add new task
const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  addDoc(collection(db, "tasks"), {
    title: form.title.value,
    description: form.description.value,
  }).catch((error) => console.log(error));
  form.title.value = "";
  form.description.value = "";
});

//delete task
// const taskContainer = document.querySelector(".tasks");
// taskContainer.addEventListener("click", (event) => {
 //  if (event.target.tagName === "I") {
  //  const id = event.target.getAttribute("data-id");
   // deleteDoc(doc(db, "tasks", id));
 // }
// });

// Upload Image Function (Create)
function uploadImage() {
    const file = document.getElementById('image-file').files[0];
    const title = document.getElementById('image-title').value;
    // Firebase Storage upload logic
    // Firestore/Realtime Database entry logic
}

// Fetch and Display Images (Read)
function fetchImages() {
    // Firestore/Realtime Database fetch logic
    // Iterate over fetched images and display in 'images-container'
}

// Update Image Function (Update)
function updateImage(imageId, newDetails) {
    // Firestore/Realtime Database update logic
}

// Delete Image Function (Delete)
function deleteImage(imageId) {
    // Firestore/Realtime Database delete logic
    // Firebase Storage delete logic
}

// Initialize Fetch on Load
document.addEventListener('DOMContentLoaded', function () {
    fetchImages();
});
