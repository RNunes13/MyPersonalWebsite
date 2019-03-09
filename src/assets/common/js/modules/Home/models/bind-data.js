
import { data } from '../data/index';
import { skills, otherSkills } from './dummyData';
import { home as El } from '../../Globals/globals-selectors';

export default {
  init() {
    bindData();
  },
};

function bindData() {
  data.skills = skills;
  data.otherSkills = otherSkills;

  Personal.homeComponent = Personal.rivets.bind(El.$homeComponent, {
    app: {
      ...data,
    },
  }).models;
}
