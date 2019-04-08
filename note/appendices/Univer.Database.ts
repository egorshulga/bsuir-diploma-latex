export class Entity {
    Id: number;
}

export class User extends Entity {
    Email: string;
    EmailConfirmed: boolean;
    RegistrationDateTime: Date;
    PasswordHash: string;
    PasswordSalt: string;
    HashAlgorithm: string;
    PasswordChangeDateTime: Date;
    FirstName: string;
    MiddleName: string;
    LastName: string;
    About: string;
    Roles: number[];
}

export class StudentRoleRequest extends Entity {
    State: number;
    User: User;
    StudentGroup: StudentGroup;
    Subgroup: number;
}

export class TeacherRoleRequest extends Entity {
    State: number;
    User: User;
    Department: Department;
}

export class ApprovedStudentRoleRequest extends Entity {
    ApprovedDateTime: Date;
    StudentRoleRequest: StudentRoleRequest;
    Approver: User;
}

export class ApprovedTeacherRoleRequest extends Entity {
    ApprovedDateTime: Date;
    TeacherRoleRequest: TeacherRoleRequest;
    Approver: User;
}

export class Student extends Entity {
    User: User;
    StudentGroups: StudentGroup[];
    Subgroups: number[];
}

export class Teacher extends Entity {
    User: User;
    AcademicPosition: number;
    AdministrativePosition: number;
    AcademicDegree: number;
    AcademicTitle: number;
    Department: Department;
    Discipline: Discipline[];
}

export class University extends Entity {
    Abbreviation: string;
    FullName: string;
    Description: string;
    Faculties: Faculty[];
    Departments: Department[];
    AdministrativeDepartments: AdministrativeDepartment[];
    TimeSlots: TimeSlot[];
}

export class Faculty extends Entity {
    Abbreviation: string;
    FullName: string;
    Description: string;
    University: University;
    Specialities: Speciality[];
}

export class Speciality extends Entity {
    Abbreviation: string;
    FullName: string;
    WayOfStudy: number;
    Faculty: Faculty;
    SpecialityPrograms: SpecialityProgram[];
}

export class AdministrativeDepartment extends Entity {
    Name: string;
    Description: string;
    University: University;
}

export class Department extends Entity {
    Abbreviation: string;
    FullName: string;
    Description: string;
    University: University;
    Specialities: Speciality[];
    Teachers: Teacher[];
}

export class StudentGroup extends Entity {
    Number: string;
    YearOfEntrance: number;
    YearOfStudy: number;
    Speciality: Speciality;
}

export class SpecialityProgram extends Entity {
    YearOfEntrance: number;
    Disciplines: Discipline[];
    Speciality: Speciality;
}

export class Discipline extends Entity {
    Abbreviation: string;
    FullName: string;
    Description: string;
    TotalHours: number;
    SpecialityProgram: SpecialityProgram;
    DisciplineSections: DisciplineSection[];
}

export class DisciplineSection extends Entity {
    Description: string;
    SemesterNumber: number;
    SemesterHours: number;
    TypeOfExam: number;
    DisciplineProgram: File;
    Discipline: Discipline;
    Materials: DisciplineMaterial[];
}

export class DisciplineMaterial extends Entity {
    Title: string;
    TypeOfMaterial: number;
    LastUpdateTime: Date;
    File: File;
    DisciplineSection: DisciplineSection;
}

export class StudentTask extends Entity {
    DisciplineMaterial: DisciplineMaterial;
    TaskNumber: number;
    VariantNumber: number;
    Student: Student;
    Teacher: Teacher;
    TaskResults: TaskResult[];
    WorkflowState: number;
    Mark: number;
    MarkDate: Date;
}

export class TaskResult extends Entity {
    StudentTask: StudentTask;
    DeliveryDate: Date;
    File: File;
}

export class TimeSlot extends Entity {
    LessonNumber: number;
    StartTime: Date;
    EndTime: Date;
}

export class ClassesSchedule extends Entity {
    WeekNumber: number;
    WeekDay: number;
    StudentGroups: StudentGroup[];
    Subgroups: number[];
    TimeSlot: TimeSlot;
    ClassRoom: ClassRoom;
    DisciplineSection: DisciplineSection;
    YearOfStudy: number;
    Season: number;
    Teacher: Teacher;
    TypeOfClasses: number;
}

export class ClassesEvent extends Entity {
    ClassesSchedule: ClassesSchedule;
    Date: Date;
}

export class StudentAttendance extends Entity {
    ClassesEvent: ClassesEvent;
    Student: Student;
    Attendance: number;
}

export class ClassRoom extends Entity {
    University: University;
    BuildingNumber: number;
    Address: string;
    RoomNumber: number;
}

export class Message extends Entity {
    FromUser: User;
    ToUser: User;
    Text: string;
    Attachment: File;
    Time: Date;
}
