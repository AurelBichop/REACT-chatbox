import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp= firebase.initializeApp({
    apiKey: "AIzaSyC10qMFWWYgG9OG8ax8tVouBj2bkeaVIcE",
    authDomain: "chatbox-651e8.firebaseapp.com",
    databaseURL: "https://chatbox-651e8.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base