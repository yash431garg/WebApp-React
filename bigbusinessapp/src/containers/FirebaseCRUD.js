import firebase from 'firebase/app';
import Firebase from './Firebase';
import 'firebase/storage';
import 'firebase/analytics';
const db = Firebase.ref("/Users/uid1/");
class FirebaseCRUD {


    getInventory() {
        let path = "/Users/uid1/";
        ['invoice','profile','staffDetails','inventory'].forEach((item)=>{
            Firebase.ref(path+item).on('value',function(snapshot){
                console.log(snapshot.key);
                console.log(snapshot.val());
            });
        });

        // db.on('value', function (snapshot) {
        //     snapshot.forEach(function (childSnapshot) {
        //         var data = childSnapshot.val();
        //         console.log(data);
        //     });
        // });
        

        firebase.database().ref("/Users/uid1/").child("invoice").set({
            'invoice id': "in-id-1",
            'name': "Cinthol",
            'price': "28",
            'quantity': "400",
            'total price': "400"
        });
    }
}

export default FirebaseCRUD;