const grades = {
    Junior: 'junior',
    Middle: 'middle',
    Senior: 'senior',
}

const bonuses = {
    'C++': 20,
    Rust: 40,
    default: 100,
}

const gradeTax = {
    [grades.Junior]: 0.25,
    [grades.Middle]: 0.5,
    [grades.Senior]: 0.75,
}


function User(name, language, grade = grades.Junior) {
    this.name = name;
    this.grade = grade;
    this.salary = 1000;
    this.language = language;
    this.tasks = 0;

    // обязательно стрелочная функция

    this.addTask = () => {
        this.tasks++;
    };

    this.finishTask = () => {
        if(this.tasks > 0) {
            this.tasks--;
            this.salary += (bonuses[this.language] || bonuses.default) * gradeTax[this.grade];
        };
    }
}



const user = new User('John', 'C++', grades.Junior);
const user1 = new User('Vasya', 'Rust', grades.Senior);
const user2 = new User('Dima', 'Java', grades.Middle);

user2.addTask();
user2.addTask();
user2.addTask();
user2.finishTask();
user2.finishTask();

console.log(user, user1, user === user1, user.addTask(), user.finishTask(), user2);