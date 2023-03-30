class Student {
  constructor(lastName,firstName,age, score, certificate, certificateDate){
    this.lastName = lastName;
    this.firstName =firstName;
    this.age= age;
    this.score= score;
    this.certificate= certificate;
    this.certificateDate= certificateDate;
  }
}

const students = [
  new Student('이','민아', 23, 95, true, '2023/03/30' ),
  new Student('김','민수', 24, 98, true, '2023/03/27' ),
  new Student('이','강한', 32, 76, false, '2023/03/13' ),
  new Student('박','문대', 21, 79, true, '2023/03/10' ),
  new Student('송','민중', 26, 80, true, '2023/03/29' ),
  new Student('조','아현', 22, 55, false, '2023/02/12' ),
  new Student('이','용수', 21, 90, true, '2023/02/13' ),
  new Student('김','대웅', 23, 45, false, '2023/03/30' )
];

const schoolClass = document.querySelector('.school_class');

students.forEach(student => {
  schoolClass.innerHTML+=`
  <div class="student">
  이름: ${student.lastName} ${student.firstName} <br/>
  나이: ${student.age} <br/>
  시험점수: ${student.score} <br/>
  자격증: ${student.certificate ? '취득' : '미취득'} <br/>
  자격증취득일: ${student.certificateDate} <br/>
  </div>
  `;
});