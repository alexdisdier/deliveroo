import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import 'jest-enzyme';

/* istanbul ignore next */
configure({ adapter: new Adapter() });
