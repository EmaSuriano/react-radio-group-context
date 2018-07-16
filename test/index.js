import { configure } from 'enzyme';
import Adapter from './ReactSixteenAdapter'; // FIX: when enzyme supports for context tag, replace this with enzyme-adapter-react-16

configure({ adapter: new Adapter() });
