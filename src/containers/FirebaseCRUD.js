import firebaseDb from "./Firebase";  
import 'firebase/storage';
import 'firebase/database';
export default class FirebaseCRUD {
    
    userUid = "uid1";

    get(path) {
        let result = [];
            firebaseDb.ref('Users/'+this.userUid+'/'+path).on('value',function(snapshot){
                result.push(snapshot.val());
            });
        return result;
    }

    post(path,data){
        firebaseDb.database().ref("/Users/"+this.userUid).child(path).push(data).then(
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

