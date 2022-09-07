import { NativeStackScreenProps } from '@react-navigation/native-stack';

export enum MainRoutes {
    HOME = 'Home',
    LOGIN = 'Login',
    REGISTER = 'Register',
}

export type RootStackParamList = {
    [MainRoutes.HOME]: undefined;
    [MainRoutes.LOGIN]: undefined;
    [MainRoutes.REGISTER]: undefined;
};

export type StackScreenProps = {
    [MainRoutes.HOME]: NativeStackScreenProps<RootStackParamList, MainRoutes.HOME>;
    [MainRoutes.LOGIN]: NativeStackScreenProps<RootStackParamList, MainRoutes.LOGIN>;
    [MainRoutes.REGISTER]: NativeStackScreenProps<RootStackParamList, MainRoutes.REGISTER>;
};
