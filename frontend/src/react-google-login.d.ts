declare module 'react-google-login' {
  import { ComponentType } from 'react';

  export interface GoogleLoginProps {
    clientId: string;
    buttonText?: string;
    onSuccess?: (response: any) => void;
    onFailure?: (response: any) => void;
    cookiePolicy?: string;
    style?: React.CSSProperties;
    className?: string;
    disabled?: boolean;
    render?: (renderProps: { onClick: () => void; disabled: boolean }) => JSX.Element;
  }

  const GoogleLogin: ComponentType<GoogleLoginProps>;
  export default GoogleLogin;
}
