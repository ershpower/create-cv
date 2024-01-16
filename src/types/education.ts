import { Dayjs } from 'dayjs';

import { EducationTypes } from '../components/Education/constants';

export interface IEducation {
    institution: string;
    dateEnd: Dayjs | null;
    degree: EducationTypes;
}
