import {
  BasicInfoComponent
} from '../../resume/basic-info/basic-info.component';
import {
  EducationComponent
} from '../../resume/education/education.component';
import {
  SkillComponent
} from '../../resume/skill/skill.component';
import {
  WorkComponent
} from '../../resume/work/work.component';
import {
  Routes
} from '@angular/router';

const routes: Routes = [
  {
    path: 'basic',
    component: BasicInfoComponent
  },
  {
    path: 'education',
    component: EducationComponent
  },
  {
    path: 'skill',
    component: SkillComponent
  },
  {
    path: 'work',
    component: WorkComponent
  }
];

export default routes;
