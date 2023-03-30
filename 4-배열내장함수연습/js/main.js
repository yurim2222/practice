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

//학생들의 이름을 배열이 아닌 문자열로 나열
const studentNames = students.map(student =>`${student.lastName} ${student.firstName}`).join(', ');//join 배열의 모든 요소를 문자열로 출력
const answer01 = document.querySelector(".quiz01");
answer01.innerHTML += studentNames;
console.log(studentNames);

//가장 먼저 자격증을 취득한 학생
const firstCertStudent = students.reduce((acc, student) => {
  if (student.certificate && new Date(student.certificateDate) < new Date(acc.certificateDate)) {
    return student;
  }
  return acc;
}, students[0]);
const answer02 = document.querySelector('.quiz02');
answer02.innerHTML += `가장먼저 취득 한 사람 : ${firstCertStudent.lastName} ${firstCertStudent.firstName}`;

const avrAge = students.map(avg =>{
})

//`학생들의 나이 평균
const totalAge = students.reduce((acc, cur) => acc + cur.age, 0);
const averageAge = totalAge / students.length;

const answer03 = document.querySelector('.quiz03');
answer03.innerHTML += `학생들의 나이 평균: ${averageAge}`;

//학생들의 이름으로 새로운 배열 반환
const studentNamesarr = [];

students.forEach(student => {
  studentNamesarr.push(`${student.lastName} ${student.firstName}`);
});

const answer04 = document.querySelector('.quiz04');
answer04.innerHTML += studentNamesarr;
console.log(studentNamesarr);

//시험점수가 80점 미만인 학생을 제외한 새로운 배열//
const highScore = [];
const highScoringStudents = students.filter(student => (student.score >= 80));
highScoringStudents.map(student => highScore.push(`${student.lastName} ${student.firstName}`));
const answer05 = document.querySelector('.quiz05');
answer05.innerHTML += `고득점자: ${highScore}`;
console.log(highScore);

//시험점수가 100점인 학생이 있나요? 결과값만 반환(있다,없다)
const hasScore100 = students.some(student => student.score === 100);
const answer06 = document.querySelector('.quiz06');
answer06.innerHTML +=hasScore100 ? '백점인 사람 "있다"' : '백점인 사람 "없다"';

//목표점수라는 새로운 키와 값이 추가 된 배열 만들기. 목표점수는 90점 이상의 학생은 변동없음, 90점 미만의 학생은 +10점
const lowScorers = students.filter(student => student.score < 90);
const targetScores = lowScorers.map(student => {
  return {
    ...student,
    '목표점수': student.score + 10
  };
});

const answer07 = document.querySelector('.quiz07');

targetScores.forEach(student => {
  answer07.innerHTML += `
    <div>
      ${student.lastName} ${student.firstName} : ${student['목표점수']}
    </div>
  `;
});
console.log(targetScores);


//자격증을 취득한 학생은 총 몇명인가요?
let numPassCertificate = 0;
for (let i = 0; i < students.length; i++) {
  if (students[i].certificate) {
    numPassCertificate++;
  }
}

const answer08 = document.querySelector('.quiz08');
answer08.innerHTML += `자격증 취득자: ${numPassCertificate}명`;


//시험점수 50점 미만은 과락이라고 할 때, 과락한 학생이 있는지 확인
const fail = students.filter(student => student.score < 50);
const numfail = fail.length;

const answer09 = document.querySelector('.quiz09');
answer09.innerHTML += `과락자 : ${numfail}명`;

//시험점수만으로 이루어진 배열 반환, 단 내림차순으로 반환한다
const scores = students.reduce((acc, student) => {
  acc.push(student.score);
  return acc;
}, []);

scores.sort((a, b) => b - a);

const answer10 = document.querySelector('.quiz10');
answer10.innerHTML += scores;
console.log(scores);

//나이를 오름차순으로 반환한 후 마지막 3인을 배열로 반환한다.
const age = students.map(student => student.age);
age.sort((a, b) => a - b);
const answer11 = document.querySelector('.quiz11');
const oldestThree = age.slice(-3);
answer11.innerHTML += oldestThree;









