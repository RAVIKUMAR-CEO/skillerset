// Export all tutorial content
import { htmlIntroductionTutorial } from './html-introduction';
import { cssFlexboxTutorial } from './css-flexbox';
import { javascriptFunctionsTutorial } from './javascript-functions';
import { pythonBasicsTutorial } from './python-basics';
import { arraysDataStructureTutorial } from './arrays-data-structure';
import { sqlSelectTutorial } from './sql-select';
import { reactComponentsTutorial } from './react-components';
import { pythonIntroductionTutorial } from './python-introduction';
import { dataStructuresAlgorithmsTutorial } from './data-structures-algorithms';
import { sortingAlgorithmsTutorial } from './sorting-algorithms';
import { addTutorial } from '../tutorials';

// Register all tutorials
addTutorial(htmlIntroductionTutorial);
addTutorial(cssFlexboxTutorial);
addTutorial(javascriptFunctionsTutorial);
addTutorial(pythonBasicsTutorial);
addTutorial(arraysDataStructureTutorial);
addTutorial(sqlSelectTutorial);
addTutorial(reactComponentsTutorial);
addTutorial(pythonIntroductionTutorial);
addTutorial(dataStructuresAlgorithmsTutorial);
addTutorial(sortingAlgorithmsTutorial);

// Export for easy access
export { 
  htmlIntroductionTutorial,
  cssFlexboxTutorial,
  javascriptFunctionsTutorial,
  pythonBasicsTutorial,
  arraysDataStructureTutorial,
  sqlSelectTutorial,
  reactComponentsTutorial,
  pythonIntroductionTutorial,
  dataStructuresAlgorithmsTutorial,
  sortingAlgorithmsTutorial
};

