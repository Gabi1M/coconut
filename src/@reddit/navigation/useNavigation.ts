import { NavigationProp, useNavigation as libUseNavigation } from '@react-navigation/native';
import { RootStackParamList } from './types';

const useNavigation = () => libUseNavigation<NavigationProp<RootStackParamList>>();
export default useNavigation;
