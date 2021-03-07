import firebase from 'firebase/app';
import Firebase from './Firebase';
import 'firebase/storage';
import 'firebase/analytics';

const db = Firebase.ref("/Users/uid1/");
class FirebaseCRUD {

    userUid = "uid1";

    get(path) {
        let result = [];
            Firebase.ref('Users/'+this.userUid+'/'+path).on('value',function(snapshot){
                result.push(snapshot.val());
            });
        return result;
    }

    post(path,data){
        firebase.database().ref("/Users/"+this.userUid).child(path).push(data).then(
            res => {
                console.log(res);
                return res;
            },
            err => {
                console.log(err);
                return err;
            }
        );
    }
}

export default FirebaseCRUD;