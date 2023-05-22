let allStudents = [
    'A',
    'B-',
    1,
    4,
    5,
    2
  ]
  
  let studentsWhoPass = [];
  for (let i = 0; i < allStudents.length ; i++) {
if( allStudents[i]>=3|| allStudents[i]=="A"|| allStudents[i]=="A-"|| allStudents[i]=="B"|| allStudents[i]=="B-"|| allStudents[i]=="C" ){
    studentsWhoPass.push(allStudents[i])
}
}
//console.log(studentsWhoPass)

for ( let i=1; i<20;){
    console.log(i)
    i=i+3

}