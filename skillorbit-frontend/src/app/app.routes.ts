import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { StudentPortal } from './pages/student-portal/student-portal';
import { TeacherPortal } from './pages/teacher-portal/teacher-portal';
import { RecruiterPortal } from './pages/recruiter-portal/recruiter-portal';
import { AdminPortal } from './pages/admin-portal/admin-portal';
import { EducationHubs } from './pages/education-hubs/education-hubs';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'student', component: StudentPortal },
  { path: 'teacher', component: TeacherPortal },
  { path: 'recruiter', component: RecruiterPortal },
  { path: 'admin', component: AdminPortal },
  { path: 'hubs', component: EducationHubs },
  { path: '**', redirectTo: '' }
];
