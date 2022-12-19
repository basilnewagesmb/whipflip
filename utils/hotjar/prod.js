import { hotjar } from 'react-hotjar';


export function init(hjid, hjsv) {
    hotjar.initialize(hjid, hjsv);
}
