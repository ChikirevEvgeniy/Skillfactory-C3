const person = {
    city: 'Moscow'
}

const student = Object.create(person);
student.ownCity = 'Piter';
student.name = 'Ivan';

//Задание 1
function contentObj(obj){
    for (let key in obj){
        if (obj.hasOwnProperty(key)){
            console.log(key, obj[key]);
        }
    }
}
//contentObj(student);

//Задание 2
function checkPropInObj(str, obj){
    return (str in obj);
}
//console.log(checkPropInObj('city', student));

//Задание 3
function createObjWithoutProto(){
    return Object.create(null);
}