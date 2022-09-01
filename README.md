# Making a Teachers Students Attendance Shit

## Requirements

Anyone Can Register as a Student But A Teacher Must have a Sickret-Key To Register.Teacher CAn Create and Delete a Student's Account and Change Account's Status. Student Can Change There Profile And Profile Info or Image When the Account's Status is Active.A student Can Give The Attendance in A Particular Time. Teacher Can Set The Time For All Students or A Single Student.A Student Can See his Attendance Shit . Teacher Can See all Attendances Shit , Filter By Time .

### Functional Requirments

#### Teacher

- Teacher can Register or Login
- Update Profile Information
- See Students Attendance Shit
- Can Change the Attendance Timestamp
- Can Change Students Accounts Stutas
- Enable or Disable Attendance button for a particular Student
- Delete a Student Account

### Student

- Student Can Register or Login
- Update There Profile information when it's Active
- Give Attendance in A fixed Time
- Attendance Oance a Day
- Delete Account
- See his or Her Attendance Shit

### Models

#### Teacher Models

teacher model {
id:unique,
name:String,
email: string,
password: hash,
sekret-key: string,
date:,
attendanceTime:8am-4pm

}

#### Students Models

Students model {
id:unique,
name:String,
email: string,
password: hash
status:panding
date:,
attandanceAbality:true/false
}

#### Attendance Models

Attendance model {
Studentid:unique,
Studantname:String,
date:,
stutas:done
}
