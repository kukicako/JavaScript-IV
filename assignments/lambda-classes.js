// CODE here for your Lambda Classes
class Person{
    constructor(props){
        this.newName = props.name
        this.newAge = props.age
        this.newLocation = props.location
    }
    speak(){
        return `Hello my name is ${this.newName}, I am from ${this.newLocation}`;
    }
}

class Instructor extends Person{
    constructor(instructorProps){
        super(instructorProps);
        this.newSpecialty = instructorProps.specialty
        this.newfavLanguage = instructorProps.language
        this.newcatchPhrase = instructorProps.phrase
        this.newSubject = instructorProps.subject
        
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student.newName} receives a perfect score on ${subject}`
    }
}
class Student extends Person{
    constructor(objectsOne){
        super(objectsOne);
        this.favSubjects = objectsOne.favSubjects;
    }
    listsSubjects(){
        return `${student.newName} favorite subjects are ${student.favSubjects}`
    }
    PRAssignment(subject){
        return `${student.newName} has submitted a PR for ${subject}`
        
    }
}
class ProjectManager extends Instructor{
    constructor(ProjectManagerProps){
        super(ProjectManagerProps);
        this.newGradClassName = ProjectManagerProps.GradClassName
        this.newFavInstructor = ProjectManagerProps.FavInstructor
    }
    standUp(channel){
        return `${this.newName} announces to ${channel} @channel standy times`
    }
    debugsCode(student){
        return `${this.newName} debugs ${student.name} code on ${subject}`
    }
}



const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`,
    subject: 'Stonks'

});
const PM = new ProjectManager({
    name: 'Tara',
    location: 'far',
    age: 27,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `you reach i teach`,
    subject: 'Stonks',
    

});

const student = new Student({
    name: 'Muamer',
    age: '22',
    location: 'Bosnia',
    previousBackground: 'Smiths',
    classname: 'web23',
    favSubjects: ['Html', 'CSS', 'JavaScript']

    
})

//const studentTwo = new student ({
    //  name: 'David',
    //  age: '21',
    //  location: 'Vegas',
    //  previousBackground: 'DI',
  //  className: 'ls1908',
  // favSubject: '['Html', 'CSS', 'JavaScript']'
  // })

console.log(student.speak())
console.log(fred.demo(fred.newSubject))
console.log(fred.grade(student, fred.newSubject))
console.log(student.listsSubjects())
console.log(student.PRAssignment(fred.newSubject))
