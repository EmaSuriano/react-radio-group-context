import { configure } from 'enzyme';
import Adapter from './ReactSixteenAdapter';
// import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
